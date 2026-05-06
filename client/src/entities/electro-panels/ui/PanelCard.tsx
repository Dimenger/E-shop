import type { ElectroPanelModel } from "../model/types";

interface Props {
  item: ElectroPanelModel;
}

export const PanelCard = ({ item }: Props) => {
  // Находим минимальную цену среди доступных корпусов (если цена добавлена в Enclosure)
  // Или просто выводим основные характеристики
  return (
    <div
      className="panel-card"
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        margin: "8px",
        borderRadius: "8px",
      }}
    >
      <h3>{item.title}</h3>
      <p style={{ color: "#666" }}>{item.description}</p>

      <div className="specs" style={{ fontSize: "14px", margin: "10px 0" }}>
        <div>
          <strong>Модулей:</strong> {item.max_modules}
        </div>
        <div>
          <strong>DIN-рейки:</strong> {item.din_rails}
        </div>
        <div>
          <strong>Подходит для:</strong> {item.rooms}
        </div>
      </div>

      <div className="features">
        {item.features.map((feature, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              background: "#f0f0f0",
              padding: "2px 8px",
              margin: "2px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            {feature}
          </span>
        ))}
      </div>

      {item.has_vacation_mode && (
        <p style={{ color: "#2ecc71", fontSize: "12px", fontWeight: "bold" }}>
          ★ Функция "Отпуск" (неотключаемые линии)
        </p>
      )}

      {/* Цена теперь зависит от выбранного корпуса, 
          поэтому здесь обычно пишут "От ..." или выводят базовую */}
      <div style={{ marginTop: "15px" }}>
        <button>Подробнее</button>
      </div>
    </div>
  );
};
