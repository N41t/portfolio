import { create } from 'zustand';
interface State {
	currentNavigationId: string;
	setCurrentNavigationId: (currentNavigationId: string) => void;
}

export const useNavigationStore = create<State>()((set) => ({
	currentNavigationId: 'about',
	setCurrentNavigationId: (currentNavigationId: string) =>
		set({ currentNavigationId }),
}));
