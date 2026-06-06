"use client";
import { create } from "zustand";

type NavigationState = {
  currentSection: string;
};

type NavigationActions = {
  setCurrentSection: (sectionId: string) => void;
};

type NavigationStore = NavigationState & NavigationActions;

const useNavigationStore = create<NavigationStore>()((set) => ({
  currentSection: "",
  setCurrentSection: (sectionId) => set(() => ({ currentSection: sectionId })),
}));

export const useCurrentSection = () =>
  useNavigationStore((state) => state.currentSection);

export const useSetCurrentSection = () =>
  useNavigationStore((state) => state.setCurrentSection);
