import { REQUEST_TIMEOUT_MILLISECONDS } from "./constants";

interface APIResponse {
  success: boolean;
  message: string;
}

export function fetchWithTimeout(fullUrl: string, options: RequestInit) {
  const controller = new AbortController();

  let timeoutId: ReturnType<typeof setTimeout>;

  const timeoutPromise = new Promise(function (_, reject) {
    timeoutId = setTimeout(() => {
      controller.abort();
      reject(new Error("Request timeout: request took too long!"));
    }, REQUEST_TIMEOUT_MILLISECONDS);
  }) as Promise<never>;

  return fetch(fullUrl, options);

  // return Promise.race([
  //   fetch(fullUrl, { ...options, signal: controller.signal }).finally(() =>
  //     clearTimeout(timeoutId),
  //   ),
  //   timeoutPromise,
  // ]);
}

function toQueryString(data: Record<string, unknown>): string {
  const params = new URLSearchParams();
  for (const key in data) {
    if (data[key] !== undefined && data[key] !== "") {
      params.append(key, String(data[key]));
    }
  }
  return params.toString();
}

export async function getRequest<TResponse>(
  url: string,
  queryParams?: Record<string, unknown>,
): Promise<TResponse> {
  try {
    const queryString = queryParams ? `?${toQueryString(queryParams)}` : "";
    const fullUrl = `/api/v1/${url}${queryString}`;

    const res = await fetchWithTimeout(fullUrl, {
      method: "GET",
      credentials: "include",
    });

    const data = (await res.json()) as APIResponse & TResponse;

    if (!res.ok) {
      const err = new Error(data.message) as Error & { status?: number };
      err.status = res.status;
      throw err;
    }

    return data as TResponse;
  } catch (err) {
    throw err;
  }
}

export async function postRequest<TBody, TResponse>(
  body: TBody | null,
  url: string,
  queryStr?: Record<string, unknown>,
) {
  try {
    const queryString = queryStr ? `?${toQueryString(queryStr)}` : "";
    const fullUrl = `/api/v1/${url}${queryString}`;

    console.log(body, fullUrl);

    const res = await fetchWithTimeout(fullUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = (await res.json()) as APIResponse & TResponse;

    if (!res.ok) throw new Error(data.message);

    return data as TResponse;
  } catch (err) {
    throw err;
  }
}

export async function patchRequest<TBody, TResponse>(
  body: TBody,
  url: string,
  queryStr?: Record<string, unknown>,
) {
  try {
    const queryString = queryStr ? `?${toQueryString(queryStr)}` : "";
    const fullUrl = `/api/v1/${url}${queryString}`;

    const res = await fetchWithTimeout(fullUrl, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = (await res.json()) as APIResponse & TResponse;

    if (!res.ok) throw new Error(data.message);

    return data as TResponse;
  } catch (err) {
    throw err;
  }
}

export async function putRequest<TBody, TResponse>(
  body: TBody,
  url: string,
  queryStr?: Record<string, unknown>,
) {
  try {
    const queryString = queryStr ? `?${toQueryString(queryStr)}` : "";
    const fullUrl = `/api/v1/${url}${queryString}`;

    const res = await fetchWithTimeout(fullUrl, {
      method: "PUT",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = (await res.json()) as APIResponse & TResponse;

    if (!res.ok) throw new Error(data.message);

    return data as TResponse;
  } catch (err) {
    throw err;
  }
}

export async function deleteRequest<TResponse>(url: string) {
  try {
    const res = await fetchWithTimeout(`/api/v1/${url}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (res.status === 204) {
      return null as TResponse;
    }

    const data = (await res.json()) as APIResponse & TResponse;

    if (!res.ok) throw new Error(data.message);

    return data as TResponse;
  } catch (err) {
    throw err;
  }
}
