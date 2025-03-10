import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
//@ts-ignore
import * as path from 'path';

export default defineConfig({
	plugins: [react()],
});
