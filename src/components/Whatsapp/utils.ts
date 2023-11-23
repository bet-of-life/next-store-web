// export const clienteData = {
//     Nome: 'Rafael',
//     Endereco: 'Travessa Tal',
//     Numero: '853',
//     Telefone: '99999999',
//     Detalhes: {
//       Tamanho: 'M',
//       Genero: 'Masculino',
//     },
//   };
  

export const clienteData = {
  Nome: 'Rafael',
  Endereco: 'Travessa Tal',
  Numero: '853',
  Telefone: '99999999',
  Pedido: {
    Camisa: 'tal',
    Modelo: 'tal',
    Tamanho: 'M',
    Genero: 'Masculino',
  },
};

export function objectToXml(obj: any): string {
    let xml = '';
  
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (prop === 'Detalhes') {
          xml += `<${prop}>\n`;
          xml += objectToXml(obj[prop]);
          xml += `</${prop}>\n`;
        } else {
          xml += `${prop}: ${obj[prop]}\n`;
        }
      }
    }
  
    return xml;
  }
  
  export function formatMessage(clienteData: any): string {
    let message = '';
  
    message += '*CLIENTE*\n';
    for (const prop in clienteData) {
      if (clienteData.hasOwnProperty(prop) && prop !== 'Pedido') {
        message += `   ${prop}: ${clienteData[prop]},\n`;
      }
    }
  
    message += '\n*PEDIDO*\n';
    for (const detail in clienteData.Pedido) {
      if (clienteData.Pedido.hasOwnProperty(detail)) {
        message += `   ${detail}: ${clienteData.Pedido[detail]}\n`;
      }
    }
  
    return message;
  }