

import { Preferences } from '@capacitor/preferences';

export const LEVELS = 30;


export const setLevel = async (key: string, value: string) => {
  await Preferences.set({
    key: key,
    value: value,
  });
};

export const checkLevel = async (key: string) => {
  const { value } = await Preferences.get({ key: key });

  return value;
};

export const removeLevel = async (key: string) => {
  await Preferences.remove({ key: key });
};
