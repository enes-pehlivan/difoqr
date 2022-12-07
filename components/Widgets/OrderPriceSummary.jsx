import React from "react";

const OrderPriceSummary = () => {
  return (
    <div>
      <div className="mx-3 mt-2">
        <h2 className="font-boldFont mb-2">Zusammenfassung der Bestellung</h2>
        <div className="bg-white px-3 py-1 rounded-lg">
          <div className="flex justify-between items-center gap-x-2">
            <span>Artikel Gesamt</span>
            <span>14,80 $</span>
          </div>
          <div className="flex justify-between items-center gap-x-2">
            <span>Gutschein 15%</span>
            <span>-2,22 $</span>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-2">
            <span className="text-base font-headFont font-semibold">TOTAL</span>
            <span className="text-base font-headFont font-semibold">
              12,58 $
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPriceSummary;
