## Project Structure

```bash
client/
└── auth-client/
    ├── .gitignore
    ├── .prettierrc
    ├── angular.json
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.spec.json
    │
    ├── public/
    │   └── favicon.ico
    │
    ├── .vscode/
    │   ├── extensions.json
    │   ├── launch.json
    │   ├── mcp.json
    │   └── tasks.json
    │
    └── src/
        ├── index.html
        ├── main.ts
        ├── styles.css
        │
        ├── app/
        │   ├── app.config.ts
        │   ├── app.css
        │   ├── app.html
        │   ├── app.routes.ts
        │   ├── app.spec.ts
        │   ├── app.ts
        │
        │   └── features/
        │       ├── dashboard/
        │       │   ├── dashboard.ts
        │       │   ├── dashboard.html
        │       │   └── dashboard.css
        │       │
        │       ├── forbidden/
        │       │   ├── forbidden.ts
        │       │   ├── forbidden.html
        │       │   └── forbidden.css
        │       │
        │       ├── layouts/
        │       │   ├── layout.routes.ts
        │       │   └── main-layout/
        │       │       ├── main-layout.ts
        │       │       ├── main-layout.html
        │       │       └── main-layout.css
        │       │
        │       ├── user/
        │       │   ├── user.ts
        │       │   ├── user.html
        │       │   ├── user.css
        │       │   ├── user.routes.ts
        │       │   │
        │       │   ├── login/
        │       │   │   ├── login.ts
        │       │   │   ├── login.html
        │       │   │   └── login.css
        │       │   │
        │       │   └── registration/
        │       │       ├── registration.ts
        │       │       ├── registration.html
        │       │       └── registration.css
        │       │
        │       └── authorizeDemo/
        │           ├── account-settings/
        │           │   ├── account-settings.ts
        │           │   ├── account-settings.html
        │           │   └── account-settings.css
        │           │
        │           ├── active-sessions/
        │           │   ├── active-sessions.ts
        │           │   ├── active-sessions.html
        │           │   └── active-sessions.css
        │           │
        │           ├── admin-only/
        │           │   ├── admin-only.ts
        │           │   ├── admin-only.html
        │           │   └── admin-only.css
        │           │
        │           ├── admin-or-manager/
        │           │   ├── admin-or-manager.ts
        │           │   ├── admin-or-manager.html
        │           │   └── admin-or-manager.css
        │           │
        │           ├── change-password/
        │           │   ├── change-password.ts
        │           │   ├── change-password.html
        │           │   └── change-password.css
        │           │
        │           ├── notification-access/
        │           │   ├── notification-access.ts
        │           │   ├── notification-access.html
        │           │   └── notification-access.css
        │           │
        │           └── security-access/
        │               ├── security-access.ts
        │               ├── security-access.html
        │               └── security-access.css
