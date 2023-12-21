enum LocalStorageKey {
  AccessToken = "accessToken",
  GymId = "GymId",
}

function setLocalStorage(key: LocalStorageKey, value: string) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key: LocalStorageKey) {
  return localStorage.getItem(key);
}

export class AppStorage {
  static getAccessToken = (): string | null => {
    return getLocalStorage(LocalStorageKey.AccessToken);
  };

  static getGymId = (): string | null => {
    return getLocalStorage(LocalStorageKey.GymId);
  };

  static setAccessToken = (value: string) => {
    return setLocalStorage(LocalStorageKey.AccessToken, value);
  };
}
