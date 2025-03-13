/** @format */

import { atom, selector } from "recoil";

const networkAtom = atom({
	key: "networkAtom",
	default: 102,
});

const jobNetworkAtom = atom({
	key: "jobNetworkAtom",
	default: 0,
});

const notificationAtom = atom({
	key: "notificationAtom",
	default: 12,
});

const totalValue = selector({
    key: "totalValueSelector", // Ensure unique keys
    get: ({ get }) => {
      const jobNetworkCount = get(jobNetworkAtom);
      const networkCount = get(networkAtom);
      return jobNetworkCount + networkCount;
    },
  });
  
  const afterClickNotificationValue = selector({
    key: "afterClickNotificationValueSelector", // Ensure unique keys
    get: ({ get }) => {
      const totalVal = get(totalValue);
      const notificationCount = get(notificationAtom);
      return totalVal + notificationCount;
    },
  });
  
export {
	networkAtom,
	jobNetworkAtom,
	notificationAtom,
	totalValue,
	afterClickNotificationValue,
};
