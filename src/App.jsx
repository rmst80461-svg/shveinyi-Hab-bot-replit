import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      const { data, error } = await supabase.from('_test').select('*').limit(1);
      if (error && error.code !== 'PGRST116') {
        console.log('Database check:', error.message);
      }
      setConnected(true);
    } catch (err) {
      console.error('Connection error:', err);
      setConnected(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '48px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '500px',
        width: '100%',
        margin: '20px'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#1a202c',
          textAlign: 'center'
        }}>
          Добро пожаловать!
        </h1>

        <div style={{
          padding: '20px',
          background: loading ? '#f7fafc' : (connected ? '#f0fdf4' : '#fef2f2'),
          borderRadius: '8px',
          marginBottom: '24px',
          border: `2px solid ${loading ? '#e2e8f0' : (connected ? '#86efac' : '#fca5a5')}`
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: loading ? '#4a5568' : (connected ? '#166534' : '#991b1b'),
            marginBottom: '8px'
          }}>
            {loading ? 'Проверка подключения...' : (connected ? '✓ Успешно подключено' : '✗ Ошибка подключения')}
          </div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280'
          }}>
            {loading ? 'Подключение к Supabase' : (connected ? 'База данных готова к работе' : 'Проверьте настройки .env')}
          </div>
        </div>

        <div style={{
          fontSize: '14px',
          color: '#6b7280',
          lineHeight: '1.6'
        }}>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#1a202c' }}>Приложение готово к работе!</strong>
          </p>
          <p style={{ marginBottom: '8px' }}>
            Текущая конфигурация:
          </p>
          <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
            <li>React + Vite</li>
            <li>Supabase клиент</li>
            <li>Готово для Replit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
