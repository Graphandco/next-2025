"use client";
import { createContext, useContext, useState, useCallback } from "react";

const HeaderHeightContext = createContext(null);

export const HeaderHeightProvider = ({ children }) => {
	const [headerHeight, setHeaderHeight] = useState(0);

	const updateHeaderHeight = useCallback((newHeight) => {
		setHeaderHeight(newHeight);
	}, []);

	return (
		<HeaderHeightContext.Provider
			value={{ headerHeight, updateHeaderHeight }}
		>
			{children}
		</HeaderHeightContext.Provider>
	);
};

export const useHeaderHeight = () => useContext(HeaderHeightContext);
