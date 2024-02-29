import { create } from "zustand";

type State = {
  position: { x: number; y: number };
  orientation: number;
};

type Action = {
  updateOrientation: (orientation: State["orientation"]) => void;
  updatePosition: (position: State["position"]) => void;
};

export const useAntStore = create<State & Action>((set) => ({
  position: { x: 5, y: 5 },
  orientation: 0,
  updateOrientation: (orientation) => set(() => ({ orientation: orientation })),
  updatePosition: (position) => set(() => ({ position: position })),
}));
