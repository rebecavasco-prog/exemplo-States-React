import React, { useState } from 'react';
export default function Button({ valor }) {
  const [texto, setTexto] = useState(valor);
  return <button onClick={()=>setTexto("Você clicou!")}>{texto}</button>;
}
