# Replit App

Простое React приложение с Supabase, готовое для запуска на Replit.

## Структура проекта

```
.
├── src/
│   ├── App.jsx           # Главный компонент приложения
│   ├── main.jsx          # Точка входа React
│   ├── index.css         # Глобальные стили
│   └── supabaseClient.js # Настройка Supabase клиента
├── index.html            # HTML шаблон
├── vite.config.js        # Конфигурация Vite
├── package.json          # Зависимости проекта
└── .env                  # Переменные окружения
```

## Как запустить на Replit

1. Создайте новый Repl и импортируйте этот проект
2. Replit автоматически установит зависимости
3. Нажмите кнопку "Run" - приложение запустится на порту 5173
4. Откройте в браузере

## Команды

- `npm run dev` - Запуск dev сервера
- `npm run build` - Сборка для продакшна
- `npm run preview` - Превью production сборки

## Технологии

- React 18
- Vite
- Supabase
- CSS-in-JS (inline styles)
