export function createPageUrl(pageName, params) {
  const baseUrl = `/${pageName}`;
  if (params) {
    const searchParams = new URLSearchParams(params);
    return `${baseUrl}?${searchParams.toString()}`;
  }
  return baseUrl;
}