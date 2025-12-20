// hooks/useMessageForm.ts
import { useState } from 'react';

export function useMessage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!name.trim() || !message.trim()) {
      setStatus('Nama dan pesan wajib diisi');
      return;
    }

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error || 'Terjadi kesalahan');
        return;
      }

      setStatus(`Pesan berhasil dikirim! Terima kasih, ${name}.`);
      setName('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('Gagal mengirim pesan');
    }
  };

  return { name, setName, message, setMessage, status, handleSubmit };
}
