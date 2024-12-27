// export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const accessTokenLifetime = 1000 * 60 * 15; // 15 хвилин

export const refreshTokenLifetime = 1000 * 60 * 60 * 24 * 30; // 30 днів
