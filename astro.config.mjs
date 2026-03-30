// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: {
		port: 8080,
		host: '0.0.0.0'
	},
	/*
	vite: {
		server: {
			allowedHosts: ['80b1-2804-d41-ec67-8200-cc47-c508-98f9-7a5.ngrok-free.app'],
		},
	},
	*/
	integrations: [
		starlight({
			title: 'IBMR - C',
			description: 'Aprenda a programar em C do zero.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português (BR)', lang: 'pt-BR' },
			},
			sidebar: [
				{
					label: 'Primeiros Passos',
					items: [
						{ label: 'Introdução', slug: 'getting-started/introduction' },
						{ label: 'Configurando o Ambiente', slug: 'getting-started/setup' },
						{ label: 'Seu Primeiro Programa em C', slug: 'getting-started/first-program' },
					],
				},
				{
					label: 'Fundamentos',
					items: [
						{ label: 'Variáveis e Tipos de Dados', slug: 'basics/variables' },
						{ label: 'Operador sizeof', slug: 'basics/sizeof' },
						{ label: 'Operadores', slug: 'basics/operators' },
						{ label: 'Controle de Fluxo', slug: 'basics/control-flow' },
						{ label: 'Funções', slug: 'basics/functions' },
						{ label: 'Exercícios Fundamentais', slug: 'basics/exercises' },
					],
				},
				{
					label: 'Intermediário',
					items: [
						{ label: 'Arrays', slug: 'intermediate/arrays' },
						{ label: 'Strings', slug: 'intermediate/strings' },
						{ label: 'Ponteiros', slug: 'intermediate/pointers' },
						{ label: 'Structs', slug: 'intermediate/structs' },						{ label: 'Bubble Sort', slug: 'intermediate/bubble-sort' },					],
				},
				{
					label: 'Avançado',
					items: [
						{ label: 'Gerenciamento de Memória', slug: 'advanced/memory' },
						{ label: 'Entrada/Saída de Arquivos', slug: 'advanced/file-io' },
						{ label: 'Preprocessador', slug: 'advanced/preprocessor' },
					],
				},
				{
					label: 'Referência',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
