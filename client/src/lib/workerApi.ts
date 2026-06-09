import { PROJECT_ID, WORKER_URL } from "./config";

export async function workerPost<T>(path: string, payload: Record<string, unknown>): Promise<T> {
  const apiBase = import.meta.env.DEV ? "/worker" : WORKER_URL;
  const response = await fetch(`${apiBase}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ project_id: PROJECT_ID, ...payload }),
  });

  const text = await response.text();
  let data: Record<string, unknown> = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error("The payment service returned an unexpected response. Please try again.");
  }

  if (!response.ok) {
    throw new Error(String(data.error || data.message || "Request failed"));
  }

  return data as T;
}
