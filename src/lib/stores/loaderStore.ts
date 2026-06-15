"use client";
import { create } from "zustand";

type LoaderState = {
  isLoading: boolean;
};

type LoaderActions = {
  setLoadingStatus: (status: boolean) => void;
};

type LoaderStore = LoaderState & LoaderActions;

const useLoaderStore = create<LoaderStore>()((set) => ({
  isLoading: true,
  setLoadingStatus: (status) => set(() => ({ isLoading: status })),
}));

export const useLoadingStatus = () =>
  useLoaderStore((state) => state.isLoading);

export const useSetLoadingStatus = () =>
  useLoaderStore((state) => state.setLoadingStatus);
