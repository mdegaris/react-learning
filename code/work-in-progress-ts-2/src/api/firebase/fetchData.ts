// const fetchData = async (): Promise<T[]> => {
//   const response = await fetch(urls.ROUNDS_URL, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('SERVER ERROR: Could not fetch Round data.');
//   }

//   return response.json();

export const f = <T>(a: T): T => {
  return a;
};

export function g<T>(a: T): T {
  return a;
}
