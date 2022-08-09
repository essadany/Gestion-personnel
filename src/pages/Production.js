import React from 'react'

export default function Production() {
  return (
    <div>
        <select class="form-select" aria-label="Default select example">Opérateur
            <option selected>SFR</option>
            <option value="ORANGE">ORANGE</option>
            <option value="FREE">FREE</option>
            <option value="B&&YOU">B&&YOU</option>
        </select>
        <select class="form-select" aria-label="Default select example">Client
            <option selected>ICART</option>
            <option value="EOS">EOS</option>
            <option value="AXION">AXION</option>
        </select>
        <select class="form-select" aria-label="Default select example">Opérateur
            <option selected>SFR</option>
            <option value="1">ORANGE</option>
            <option value="2">FREE</option>
            <option value="3">B&&YOU</option>
        </select>
    </div>
  )
}
