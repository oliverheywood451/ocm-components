/**
 * A summary of the allowed order quantities for this product
 */
export interface QuantityLimits {
  /**
   * The available inventory. If equals Infitity, no limit.
   */
  inventory: number;
  /**
   * The maximum quantity for one order. If equals Infitity, no limit.
   */
  maxPerOrder: number;
  /**
   * The minimum quantity for one order.
   */
  minPerOrder: number;
  /**
   * Can only order in these specific quantities. If equals [], quantities are not restricted.
   */
  restrictedQuantities: number[];
}
