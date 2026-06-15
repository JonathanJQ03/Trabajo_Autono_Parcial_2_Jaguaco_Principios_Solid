/**
 * Servicio de notificaciones de la Reserva Ecológica.
 *
 * Responsabilidad ÚNICA: Enviar notificaciones a los clientes.
 * No sabe nada de productos, persistencia ni lógica de negocio.
 *
 * ANTES (violación SRP): Esta lógica vivía dentro de ProductBloc,
 * acoplando el envío de correos con la gestión de inventario.
 *
 * DESPUÉS (SRP aplicado): Clase independiente que puede evolucionar
 * (ej. agregar SMS, push notifications) sin afectar al repositorio.
 */
export class NotificationService {

  /**
   * Envía una notificación por correo electrónico.
   * @param recipientEmail - Dirección de correo del destinatario.
   * @param message - Cuerpo del mensaje a enviar.
   */
  sendEmail(recipientEmail: string, message: string): void {
    console.log(`[Mailer] Enviando correo a ${recipientEmail}: ${message}`);
  }
}
