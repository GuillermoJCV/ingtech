const languages = {
  en: "English",
  es: "Español",
};

const defaultLang = "es";

const ui = {
  es: {
    "head.title": "IngTech - Soporte para Laptops",
    "nav.about_us": "Nosotros",
    "nav.home": "Inicio",
    "nav.login": "Ingresar",
    "present.slogan": "El que no soporta no se vende!",
    "present.readmore": "Leer más",
    "characteristics.title": "Características",
    "characteristics.materialTitle": "Material",
    "characteristics.materialText": "-PLA HD",
    "characteristics.measurementsTitle": "Medidas",
    "characteristics.measurementsText": "30x 14,5 / 3,5 de grosor",
    "characteristics.descriptionTitle": "Descripción",
    "characteristics.descriptionText":
      "Soporte para computadores portátiles compacto para computadores desde 13” hasta 16”",
    "policies.purchaseTitle": "Políticas de compra",
    "policies.purchaseText": `Disponibilidad: Las compras dependen del stock existente.

    Confirmación: El pedido se valida solo después de confirmar el pago. Responsabilidad del cliente: El cliente debe proporcionar datos correctos de compra y facturación.`,
    "policies.shippingTitle": "Políticas de envío",
    "policies.shippingText": ` Plazos estimados: Los tiempos de entrega son aproximados, no garantizados.

   Costo informado: El costo de envío se muestra antes de finalizar la compra.

   Dirección correcta: El envío se realiza a la dirección proporcionada por el cliente. `,
    "policies.warrantyTitle": "Garantía",
    "policies.warrantyText": ` Notificación oportuna: El defecto debe reportarse dentro de un plazo determinado.

   Evaluación del producto: El producto es revisado antes de aprobar el reclamo.

   Solución ofrecida: Se brinda cambio, reparación o reembolso según el caso `,
    "footer.rights": "Todos los derechos reservados ️️©️",
  },
  en: {
    "head.title": "IngTech - Laptop Stand",
    "nav.about_us": "About Us",
    "nav.home": "Home",
    "nav.login": "Login",
    "present.slogan": "Don't let your sales melt down!",
    "present.readmore": "Read more",
    "characteristics.title": "Features",
    "characteristics.materialTitle": "Material",
    "characteristics.materialText": "-HD PLA",
    "characteristics.measurementsTitle": "Measurements",
    "characteristics.measurementsText": "30x 14.5 / 3.5 thickness",
    "characteristics.descriptionTitle": "Description",
    "characteristics.descriptionText":
      "Compact laptop stand for computers from 13” to 16”",
    "policies.purchaseTitle": "Purchase Policies",
    "policies.purchaseText": `Availability: Purchases depend on existing stock.

        Confirmation: The order is validated only after confirming payment. Customer responsibility: The customer must provide correct purchase and billing data.`,
    "policies.shippingTitle": "Shipping Policies",
    "policies.shippingText": ` Estimated timeframes: Delivery times are approximate, not guaranteed.

       Informed cost: The shipping cost is displayed before completing the purchase.

       Correct address: Shipping is made to the address provided by the customer. `,
    "policies.warrantyTitle": "Warranty",
    "policies.warrantyText": ` Timely notification: The defect must be reported within a given timeframe.

       Product evaluation: The product is reviewed before approving the claim.

       Offered solution: Exchange, repair or refund is provided depending on the case `,
    "footer.rights": "All rights reserved ️️©️",
  },
} as const;

export { languages, defaultLang, ui };
