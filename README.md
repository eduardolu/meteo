# The weather

Una aplicación del tiempo para ver el tiempo actual, y de las próximas 24h o dias con detalle.
Usamos una API proporcionada por terceros, y si queremos que funcione tendras que registrarnos y tener un apiKey propio.

Antes de arrancar la aplicación, crea un archivo `.env.local` en la raíz del proyecto con tu clave:

```env
VITE_RAPIDAPI_KEY=tu_api_key_de_rapidapi
```

Para desplegar en Cloudflare Pages, no subas el archivo `.env.local`.
Configura `VITE_RAPIDAPI_KEY` desde el panel del proyecto en Cloudflare:

- **Settings** > **Environment variables**
- Variable: `VITE_RAPIDAPI_KEY`
- Valor: tu API key de RapidAPI

para que funcione en local, habrá que ejecutar lo siguiente:

```bash
npm install
npm run dev
```

y ya podrias disfrutar de la aplicación.

Configuración recomendada en Cloudflare Pages:

- **Install command**: `npm ci`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
