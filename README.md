<html><head><base href="https://websim.myhome.page/license-system/">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sistema de Licenciamento</title>
<style>
body {font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;line-height: 1.4;margin: 0;padding: 20px;background: #f5f7fa;}
.container {max-width: 1200px;margin: 0 auto;background: white;padding: 20px;box-shadow: 0 0 10px rgba(0,0,0,0.1);border-radius: 8px;}
.license-form {margin-bottom: 20px;padding: 20px;border: 1px solid #ddd;border-radius: 4px;}
.form-group {margin-bottom: 15px;}
label {display: block;margin-bottom: 5px;font-weight: bold;}
input, select {width: 100%;padding: 8px;border: 1px solid #ddd;border-radius: 4px;box-sizing: border-box;}
button {background: #3498db;color: white;border: none;padding: 10px 20px;border-radius: 4px;cursor: pointer;margin-right: 10px;}
button:hover {background: #2980b9;}
.preview {margin-top: 20px;padding: 20px;border: 1px dashed #ddd;}
.payment-info {margin-top: 20px;padding: 15px;background: #f8f9fa;border-radius: 4px;border: 1px solid #ddd;}
.payment-info h4 {margin-top: 0;color: #2c3e50;}
.payment-info p {margin: 5px 0;color: #34495e;}
.a6-preview {background: white;margin: 20px auto;padding: 10mm;position: relative;width: 93mm;height: 136mm;font-size: 10px;box-sizing: border-box;border: 2px solid darkgreen;outline: 2px solid #ffd700;outline-offset: 2px;box-shadow: 0 0 0 6px darkred;display: flex;flex-direction: column;}
.license-header {text-align: center;margin-bottom: 5px;position: relative;z-index: 1;}
.logo-placeholder {width: 50px;height: 50px;margin: 0 auto 10px;display: flex;align-items: center;justify-content: center;}
.municipality-info {text-align: center;margin-bottom: 5px;padding: 3px;border-radius: 4px;}
.municipality-info h3 {margin: 2px 0;font-size: 16px;color: #000;text-align: center;font-weight: bold;}
.municipality-info h4 {margin: 2px 0;font-size: 14px;color: #000;text-align: center;font-weight: bold;}
.municipality-info h5 {margin: 2px 0;font-size: 12px;color: #000;text-align: center;font-weight: bold;}
.license-number {color: #ff0000;text-decoration: underline;font-weight: bold;margin: 10px 0;font-size: 14px;text-transform: uppercase;text-align: center;}
.license-details {text-align: left;margin: 5px 0;background: transparent;padding: 5px;border-radius: 4px;flex-grow: 1;position: relative;z-index: 1;}
.license-details p {margin: 3px 0;padding: 2px 0;}
.license-details strong {color: #444;min-width: 80px;display: inline-block;}
.signature-section {text-align: center;padding: 5px;margin-top: 5px;position: relative;z-index: 1;}
.signature-section p {margin: 2px 0;font-weight: bold;}
.watermark {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%) scale(3);opacity: 0.1;z-index: 0;pointer-events: none;}
.license-back {page-break-before: always;background: white;margin: 20px auto;padding: 10mm;position: relative;width: 93mm;height: 136mm;font-size: 10px;box-sizing: border-box;border: 2px solid darkgreen;outline: 2px solid #ffd700;outline-offset: 2px;box-shadow: 0 0 0 6px darkred;display: flex;flex-direction: column;}
#qrcode {position: absolute;bottom: 20px;right: 20px;z-index: 1;}
.license-type-back {text-align: center;margin-top: 20px;font-size: 12px;font-weight: bold;z-index: 1;}
@media print {
    body * {visibility: hidden;}
    .a6-preview, .license-back {
        visibility: visible;position: absolute;left: 1.5mm;top: 1.5mm;width: 82mm;height: 120mm;margin: 0;padding: 8mm;
        border: 2px solid darkgreen !important;outline: 2px solid #ffd700 !important;outline-offset: 2px !important;
        box-shadow: 0 0 0 6px darkred !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;
    }
    .license-back {position: absolute;top: 140mm;}
    .a6-preview *, .license-back * {visibility: visible;}
    .watermark {opacity: 0.1 !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;}
    .payment-info {display: none;}
    .payment-info.print-only {
        visibility: visible !important;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: 500px;
        background: white;
        padding: 20px;
        box-shadow: none;
    }
    .payment-info.print-only * {
        visibility: visible !important;
    }
}
.payment-info.print-only {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 40px;
}
.payment-info.print-only .payment-header {
    text-align: center;
    margin-bottom: 30px;
}
.payment-info.print-only .logo-container {
    text-align: center;
    margin-bottom: 20px;
}
.payment-info.print-only h3 {
    margin: 5px 0;
    font-size: 18px;
    text-align: center;
}
.payment-info.print-only h4 {
    margin: 5px 0;
    font-size: 16px;
    text-align: center;
}
.payment-info.print-only h5 {
    margin: 5px 0;
    font-size: 14px;
    text-align: center;
}
.payment-info.print-only .payment-details {
    margin-top: 30px;
    line-height: 1.8;
}
.payment-info.print-only .payment-details p {
    margin: 10px 0;
    font-size: 14px;
}
@media print {
    body {
        margin: 0;
        padding: 0;
    }
    .payment-container {
        width: 210mm;
        min-height: 297mm;
        padding: 10mm;
        margin: 0;
    }
    .payment-section {
        padding: 12px;
        margin-bottom: 8px;
        border: 2px solid #000;
        border-radius: 8px;
        height: 130mm;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .payment-header {
        text-align: center;
        margin-bottom: 15px;
    }
    .payment-header h3,
    .payment-header h4,
    .payment-header h5 {
        margin: 1px 0;
        text-align: center;
    }
    .logo-container {
        text-align: center;
        margin-bottom: 8px;
    }
    .logo-container img {
        width: 50px;
        height: 50px;
    }
    .payment-details {
        margin: 8px 0;
    }
    .payment-details p {
        margin: 3px 0;
        font-size: 11px;
        line-height: 1.3;
    }
    .signature-area {
        margin: 10px 0;
        padding: 0 15px;
    }
    .dotted-separator {
        margin: 8px 0;
    }
}
.payment-section {
    border: 2px solid #000;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 8px;
}
.payment-header h3 {
    font-size: 14px;
    margin: 1px 0;
}
.payment-header h4 {
    font-size: 12px;
    margin: 1px 0;
}
.payment-header h5 {
    font-size: 11px;
    margin: 1px 0;
}
.payment-details p {
    margin: 3px 0;
    font-size: 11px;
}
.signature-area {
    margin: 10px 0;
    padding: 0 15px;
}
.dotted-separator {
    margin: 8px 0;
}
.payment-container {
    width: 210mm;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
@media print {
    .payment-container {
        height: 297mm;
        justify-content: flex-start;
    }
    .payment-section {
        break-inside: avoid;
    }
}
select[multiple] {
    height: 120px;
    padding: 8px;
}

select[multiple] option {
    padding: 4px;
    margin: 2px 0;
    border-radius: 2px;
}

select[multiple] option:checked {
    background-color: #3498db;
    color: white;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
</head>
<body>
<div class="container">
    <h1>Sistema de Licenciamento</h1>
    <div class="license-form">
        <h2>Nova Licença</h2>
        <div class="form-group">
            <label for="licenseType">Tipo de Licença:</label>
            <select id="licenseType">
                <option value="camiao">Licença de Camião</option>
                <option value="semicolectivo">Semi-Colectivo</option>
                <option value="taxi">Táxi</option>
                <option value="taxiApp">Táxi de Aplicativo</option>
                <option value="taxiMercadoria">Táxi de Mercadoria</option>
                <option value="motoTaxi">Moto-Táxi</option>
                <option value="escolar">Escolar</option>
                <option value="funebre">Transporte Fúnebre</option>
                <option value="passageiros">Transporte de Passageiros</option>
                <option value="ciclomotores">Licença de Ciclomotores</option>
                <option value="livreteCiclomotores">Livrete de Ciclomotores</option>
                <option value="oficinas">Oficinas</option>
            </select>
        </div>
        <div class="form-group">
            <label for="licenseNumber">Número da Licença:</label>
            <input type="text" id="licenseNumber" readonly>
        </div>
        <div class="form-group">
            <label for="ownerName">Nome do Proprietário/Empresa:</label>
            <input type="text" id="ownerName">
        </div>
        <div class="form-group">
            <label for="address">Endereço:</label>
            <input type="text" id="address">
        </div>
        <div class="form-group">
            <label for="plate">Matrícula:</label>
            <input type="text" id="plate">
        </div>
        <div class="form-group">
            <label for="brand">Marca:</label>
            <input type="text" id="brand">
        </div>
        <div class="form-group">
            <label for="capacity">Lotação:</label>
            <select id="capacity">
                <option value="2">2 Lugares</option>
                <option value="4">4 Lugares</option>
                <option value="5">5 Lugares</option>
                <option value="15">15 Lugares</option>
                <option value="26">26 Lugares</option>
                <option value="32">32 Lugares</option>
                <option value="52">52 Lugares</option>
            </select>
        </div>
        <div class="form-group">
            <label for="route">Rota:</label>
            <select id="route">
                <option value="">Selecione a rota</option>
                <option value="baixa_zimpecto">Baixa-Zimpecto</option>
                <option value="baixa_combatentes">Baixa P.Combatentes</option>
                <option value="baixa_laulane">Baixa-Laulane</option>
                <option value="ba_voador_malhazine">BA.voador-Malhazine</option>
            </select>
        </div>
        <div class="form-group">
            <label for="via">Via:</label>
            <select id="via" multiple>
                <option value="julius_nyerere">Av. Julius Nyerere</option>
                <option value="vladimir_lenine">Av. Vladimir Lenine</option>
                <option value="eduardo_mondlane">Av. Eduardo Mondlane</option>
                <option value="mao_tse_tung">Av. Mao Tse Tung</option>
                <option value="guerra_popular">Av. Guerra Popular</option>
                <option value="karl_marx">Av. Karl Marx</option>
                <option value="acordo_lusaka">Av. Acordo de Lusaka</option>
                <option value="fplm">Av. FPLM</option>
                <option value="angola">Av. Angola</option>
                <option value="zimbabwe">Av. Zimbabwe</option>
            </select>
        </div>
        <div class="form-group">
            <label for="paymentType">Forma de Depósito:</label>
            <select id="paymentType">
                <option value="numerario">Numerário</option>
                <option value="deposito">Depósito</option>
                <option value="transferencia">Transferência</option>
            </select>
        </div>
        <div class="form-group">
            <label for="bank">Banco:</label>
            <select id="bank" onchange="updateAccounts()">
                <option value="">Selecione o banco</option>
                <option value="BIM">BIM</option>
                <option value="BCI">BCI</option>
                <option value="Standard">Standard Bank</option>
                <option value="Absa">Absa</option>
            </select>
        </div>
        <div class="form-group">
            <label for="account">Conta:</label>
            <select id="account">
                <option value="">Selecione primeiro o banco</option>
            </select>
        </div>
        <div class="form-group">
            <label for="amount">Valor:</label>
            <input type="text" id="amount">
        </div>
        <div class="form-group">
            <label for="reference">Referência:</label>
            <input type="text" id="reference">
        </div>
        <div class="form-group">
            <label for="contact">Contacto:</label>
            <input type="text" id="contact" placeholder="(+258) " oninput="this.value = formatPhoneNumber(this.value)">
        </div>
        <div class="form-group">
            <label for="nuit">NUIT:</label>
            <input type="text" id="nuit">
        </div>
        <div class="button-group">
            <button onclick="generateLicense()">Gerar Licença</button>
            <button onclick="printLicense()">Imprimir Licença</button>
        </div>
    </div>
    <div class="preview">
        <h3>Pré-visualização</h3>
        <div id="licensePreview"></div>
    </div>
    <div class="payment-info">
        <h4>Informações de Pagamento</h4>
        <p><strong>Forma de Pagamento:</strong> ${paymentType}</p>
        <p><strong>Banco:</strong> ${bank}</p>
        <p><strong>Conta:</strong> ${account}</p>
        <p><strong>Valor:</strong> ${amount}</p>
        <p><strong>Referência:</strong> ${reference}</p>
        <p><strong>Contacto:</strong> ${contact}</p>
        <p><strong>NUIT:</strong> ${nuit}</p>
        <button onclick="printPaymentInfo()">Imprimir Informação de Pagamento</button>
    </div>
</div>
<script>
function generateLicenseNumber() {
    const licenseType = document.getElementById('licenseType').value;
    const year = new Date().getFullYear();
    let count = parseInt(localStorage.getItem('licenseCount') || 0) + 1;
    localStorage.setItem('licenseCount', count);
    const paddedCount = count.toString().padStart(3, '0');
    const letterMap = {
        'camiao': 'LC',
        'semicolectivo': 'SC',
        'taxi': 'T',
        'taxiApp': 'TA',
        'taxiMercadoria': 'TM',
        'motoTaxi': 'MT',
        'escolar': 'E',
        'funebre': 'F',
        'passageiros': 'P',
        'ciclomotores': 'C',
        'livreteCiclomotores': 'L',
        'oficinas': 'O'
    };
    return `${paddedCount}/${year}/${letterMap[licenseType]}`;
}

function formatLicensePlate(input) {
    input = input.toUpperCase();
    let plate = input.replace(/[^A-Z0-9]/g, '');
    if (plate.length <= 3) {
        return plate;
    } else if (plate.length <= 6) {
        return plate.slice(0,3) + '-' + plate.slice(3);
    } else {
        return plate.slice(0,3) + '-' + plate.slice(3,6) + '-' + plate.slice(6,8);
    }
}

function formatPhoneNumber(input) {
    let phone = input.replace(/\D/g, '');
    if (phone.length > 9) phone = phone.slice(0,9);
    return `(+258) ${phone}`;
}

function updateAccounts() {
    const bankAccounts = {
        'BIM': ['1234567890', '0987654321'],
        'BCI': ['2468101214', '1357911131'],
        'Standard': ['1112131415', '1617181920'],
        'Absa': ['2122232425', '2627282930']
    };
    const bank = document.getElementById('bank').value;
    const accountSelect = document.getElementById('account');
    accountSelect.innerHTML = '<option value="">Selecione a conta</option>';
    
    if (bank && bankAccounts[bank]) {
        bankAccounts[bank].forEach(account => {
            const option = document.createElement('option');
            option.value = account;
            option.textContent = account;
            accountSelect.appendChild(option);
        });
    }
}

document.getElementById('plate').addEventListener('input', function(e) {
    this.value = formatLicensePlate(this.value);
});

function updateFormFields() {
    const licenseType = document.getElementById('licenseType').value;
    const capacityGroup = document.querySelector('label[for="capacity"]').parentElement;
    const routeGroup = document.querySelector('label[for="route"]').parentElement;
    const viaGroup = document.querySelector('label[for="via"]').parentElement;
    
    if (licenseType === 'camiao') {
        capacityGroup.style.display = 'none';
        routeGroup.style.display = 'none';
        viaGroup.style.display = 'block';
        viaGroup.querySelector('label').textContent = 'Vias Autorizadas:';
        document.getElementById('via').multiple = true; // Enable multiple selection
    } else {
        capacityGroup.style.display = 'block';
        routeGroup.style.display = 'block';
        viaGroup.style.display = 'block';
        viaGroup.querySelector('label').textContent = 'Via:';
        document.getElementById('via').multiple = false; // Disable multiple selection
    }
}

// Add event listener for license type changes
document.getElementById('licenseType').addEventListener('change', updateFormFields);

// Call updateFormFields on page load to set initial state
document.addEventListener('DOMContentLoaded', updateFormFields);

function generateLicense() {
    document.getElementById('licenseNumber').value = generateLicenseNumber();
    const licenseType = document.getElementById('licenseType').value;
    const licenseNumber = document.getElementById('licenseNumber').value;
    const ownerName = document.getElementById('ownerName').value;
    const address = document.getElementById('address').value;
    const plate = document.getElementById('plate').value;
    const brand = document.getElementById('brand').value;
    const capacity = document.getElementById('capacity').value;
    const route = document.getElementById('route').value;
    const via = Array.from(document.getElementById('via').selectedOptions).map(option => option.value).join(', ');
    const paymentType = document.getElementById('paymentType').value;
    const bank = document.getElementById('bank').value;
    const account = document.getElementById('account').value;
    const amount = document.getElementById('amount').value;
    const reference = document.getElementById('reference').value;
    const contact = document.getElementById('contact').value;
    const nuit = document.getElementById('nuit').value;
    const preview = document.getElementById('licensePreview');
    
    const licenseDetailsHtml = licenseType === 'camiao' ? `
        <p><strong>Nome:</strong> ${ownerName}</p>
        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>Matrícula:</strong> ${plate}</p>
        <p><strong>Marca:</strong> ${brand}</p>
        <p><strong>Data de Emissão:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Validade:</strong> ${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString()}</p>
        <p style="text-align: center; margin-top: 10px;"><strong>O Director</strong></p>
    ` : `
        <p><strong>Nome:</strong> ${ownerName}</p>
        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>Matrícula:</strong> ${plate}</p>
        <p><strong>Marca:</strong> ${brand}</p>
        <p><strong>Lotação:</strong> ${capacity}</p>
        <p><strong>Rota:</strong> ${route}</p>
        <p><strong>Via:</strong> ${via}</p>
        <p><strong>Data de Emissão:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Validade:</strong> ${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString()}</p>
        <p style="text-align: center; margin-top: 10px;"><strong>O Director</strong></p>
    `;

    const licenseBackHtml = licenseType === 'camiao' ? `
        <div class="license-back">
            <div class="watermark"><img src="logo.png" alt="Logotipo do Município" width="15" height="15"></div>
            <div class="license-type-back">
                <h3>Licença de Camião</h3>
                <div class="authorized-routes">
                    <h4>Vias Autorizadas:</h4>
                    <ul style="list-style: none; padding: 0; margin: 10px 0;">
                        ${Array.from(document.getElementById('via').selectedOptions)
                            .map(option => `<li style="margin: 5px 0;">${option.text}</li>`)
                            .join('')}
                    </ul>
                </div>
            </div>
            <div id="qrcode"></div>
        </div>
    ` : licenseType === 'semicolectivo' ? `
        <div class="license-back">
            <div class="watermark"><img src="logo.png" alt="Logotipo do Município" width="15" height="15"></div>
            <div class="license-type-back">
                <h3>Semi-Colectivo</h3>
                <div class="route-info">
                    <h4>Rota Autorizada:</h4>
                    <p style="margin: 10px 0;">${document.getElementById('route').options[document.getElementById('route').selectedIndex].text}</p>
                    <h4>Via:</h4>
                    <p style="margin: 10px 0;">${document.getElementById('via').options[document.getElementById('via').selectedIndex].text}</p>
                </div>
            </div>
            <div id="qrcode"></div>
        </div>
    ` : `
        <div class="license-back">
            <div class="watermark"><img src="logo.png" alt="Logotipo do Município" width="15" height="15"></div>
            <div class="license-type-back">Serviços Autorizado:<br>${document.getElementById('licenseType').options[document.getElementById('licenseType').selectedIndex].text}</div>
            <div id="qrcode"></div>
        </div>
    `;

    const licenseTemplate = `
        <div class="a6-preview">
            <div class="watermark"><img src="logo.png" alt="Logotipo do Município" width="15" height="15"></div>
            <div class="license-header">
                <div class="logo-placeholder"><img src="logo.png" alt="Logotipo do Município" width="50" height="50"></div>
                <div class="municipality-info">
                    <h3>MUNICÍPIO DE MAPUTO</h3>
                    <h4>CONSELHO MUNICIPAL</h4>
                    <h5>PELOURO DE MOBILIDADE, TRANSPORTES E TRÂNSITO</h5>
                </div>
                <div class="license-number">${licenseType} Nº ${licenseNumber}</div>
            </div>
            <div class="license-details">
                ${licenseDetailsHtml}
            </div>
        </div>
        ${licenseBackHtml}
        <div class="payment-info">
            <h4>Informações de Pagamento</h4>
            <p><strong>Forma de Pagamento:</strong> ${paymentType}</p>
            <p><strong>Banco:</strong> ${bank}</p>
            <p><strong>Conta:</strong> ${account}</p>
            <p><strong>Valor:</strong> ${amount}</p>
            <p><strong>Referência:</strong> ${reference}</p>
            <p><strong>Contacto:</strong> ${contact}</p>
            <p><strong>NUIT:</strong> ${nuit}</p>
        </div>`;
    
    preview.innerHTML = licenseTemplate;
    
    const qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = '';
    
    new QRCode(qrcodeDiv, {
        text: `License: ${licenseNumber}\nOwner: ${ownerName}\nType: ${licenseType}`,
        width: 100,
        height: 100
    });
}

function printLicense() {
    window.print();
}

function printPaymentInfo() {
    const printWindow = window.open('', '_blank');
    const licenseType = document.getElementById('licenseType').options[document.getElementById('licenseType').selectedIndex].text;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding: 40px;
                    width: 210mm;
                    margin: 0 auto;
                }
                .payment-container {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    position: relative;
                }
                .payment-section {
                    border: 2px solid #000;
                    padding: 12px;
                    border-radius: 8px;
                    margin-bottom: 8px;
                    height: 130mm;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .dotted-separator {
                    border-top: 2px dotted #000;
                    margin: 8px 0;
                    width: 100%;
                }
                .signature-area {
                    margin: 10px 0;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 15px;
                    margin-bottom: 15px;
                }
                .signature-line {
                    width: 200px;
                    text-align: center;
                }
                .signature-line hr {
                    border: none;
                    border-top: 1px solid #000;
                    margin-bottom: 5px;
                }
                .signature-title {
                    font-size: 12px;
                    font-weight: bold;
                }
                .payment-header {
                    text-align: center;
                    margin-bottom: 15px;
                }
                .payment-header h3,
                .payment-header h4,
                .payment-header h5 {
                    margin: 1px 0;
                    text-align: center;
                }
                .logo-container {
                    text-align: center;
                    margin-bottom: 8px;
                }
                .logo-container img {
                    width: 50px;
                    height: 50px;
                }
                .payment-details {
                    margin: 8px 0;
                }
                .payment-details p {
                    margin: 3px 0;
                    font-size: 11px;
                    line-height: 1.3;
                }
            </style>
        </head>
        <body>
            <div class="payment-container">
                <div class="payment-section">
                    <div class="copy-label">ORIGINAL</div>
                    <div class="payment-header">
                        <div class="logo-container">
                            <img src="CMCM.png" alt="Logotipo do Município" width="60" height="60">
                        </div>
                        <h3>MUNICÍPIO DE MAPUTO</h3>
                        <h4>CONSELHO MUNICIPAL</h4>
                        <h5>PELOURO DE MOBILIDADE, TRANSPORTES E TRÂNSITO</h5>
                    </div>
                    <div class="payment-details">
                        <p><strong>Nome do Proprietário/Empresa:</strong> ${document.getElementById('ownerName').value}</p>
                        <p><strong>Endereço:</strong> ${document.getElementById('address').value}</p>
                        <p><strong>Valor:</strong> ${document.getElementById('amount').value}</p>
                        <p><strong>Tipo de Licença:</strong> ${licenseType}</p>
                        <p><strong>Matrícula:</strong> ${document.getElementById('plate').value}</p>
                        <p><strong>Contacto:</strong> ${document.getElementById('contact').value}</p>
                        <p><strong>NUIT:</strong> ${document.getElementById('nuit').value}</p>
                        <p><strong>Banco:</strong> ${document.getElementById('bank').value}</p>
                        <p><strong>Referência:</strong> ${document.getElementById('reference').value}</p>
                    </div>
                    <div class="signature-area">
                        <div class="signature-line">
                            <hr>
                            <div class="signature-title">O Funcionário</div>
                        </div>
                        <div class="signature-line">
                            <hr>
                            <div class="signature-title">O Requerente</div>
                        </div>
                    </div>
                </div>
                <div class="dotted-separator"></div>
                <div class="payment-section">
                    <div class="copy-label">CÓPIA</div>
                    <div class="payment-header">
                        <div class="logo-container">
                            <img src="logo.png" alt="Logotipo do Município" width="60" height="60">
                        </div>
                        <h3>MUNICÍPIO DE MAPUTO</h3>
                        <h4>CONSELHO MUNICIPAL</h4>
                        <h5>PELOURO DE MOBILIDADE, TRANSPORTES E TRÂNSITO</h5>
                    </div>
                    <div class="payment-details">
                        <p><strong>Nome do Proprietário/Empresa:</strong> ${document.getElementById('ownerName').value}</p>
                        <p><strong>Endereço:</strong> ${document.getElementById('address').value}</p>
                        <p><strong>Valor:</strong> ${document.getElementById('amount').value}</p>
                        <p><strong>Tipo de Licença:</strong> ${licenseType}</p>
                        <p><strong>Matrícula:</strong> ${document.getElementById('plate').value}</p>
                        <p><strong>Contacto:</strong> ${document.getElementById('contact').value}</p>
                        <p><strong>NUIT:</strong> ${document.getElementById('nuit').value}</p>
                        <p><strong>Banco:</strong> ${document.getElementById('bank').value}</p>
                        <p><strong>Referência:</strong> ${document.getElementById('reference').value}</p>
                    </div>
                    <div class="signature-area">
                        <div class="signature-line">
                            <hr>
                            <div class="signature-title">O Funcionário</div>
                        </div>
                        <div class="signature-line">
                            <hr>
                            <div class="signature-title">O Requerente</div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}
</script>
</body></html>
