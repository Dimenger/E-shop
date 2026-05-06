import { useState } from "react";
import type { ElectroPanelModel } from "../model/types";

interface Props {
  item: ElectroPanelModel;
  isFullView?: boolean; // Новый пропс для управления режимом снаружи (например, на отдельной странице)
}

export const PanelCard_1 = ({ item, isFullView = false }: Props) => {
  const [expanded, setExpanded] = useState(isFullView);

  return (
    <div
      className={`panel-card ${expanded ? "expanded" : ""}`}
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "12px",
        background: "#fff",
        transition: "all 0.3s ease",
        cursor: !expanded ? "pointer" : "default",
      }}
      onClick={() => !expanded && setExpanded(true)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <h3>{item.title}</h3>
        <span style={{ fontSize: "12px", color: "#999" }}>ID: {item.id}</span>
      </div>

      <p style={{ color: "#666" }}>{item.description}</p>

      {/* --- КРАТКИЕ ХАРАКТЕРИСТИКИ (всегда видны) --- */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          fontSize: "14px",
          margin: "15px 0",
        }}
      >
        <span>
          <strong>Модулей:</strong> {item.max_modules}
        </span>
        <span>
          <strong>Рейки:</strong> {item.din_rails}
        </span>
        <span>
          <strong>Для:</strong> {item.rooms}
        </span>
      </div>

      {/* --- ДЕТАЛЬНАЯ ИНФОРМАЦИЯ (только если развернуто) --- */}
      {expanded && (
        <div
          className="details"
          style={{
            marginTop: "20px",
            borderTop: "1px solid #eee",
            paddingTop: "15px",
          }}
        >
          {/* Варианты боксов (Enclosures) */}
          <div style={{ marginBottom: "20px" }}>
            <h4>Варианты корпусов:</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {item.enclosures?.map((enc) => (
                <div
                  key={enc.id}
                  style={{
                    fontSize: "13px",
                    padding: "8px",
                    background: "#f9f9f9",
                    borderRadius: "6px",
                  }}
                >
                  <strong>
                    {enc.type === "surface" ? "📦 Накладной" : "🖼 В нишу"}:
                  </strong>{" "}
                  {enc.name}
                  <div style={{ color: "#888" }}>
                    {enc.width}x{enc.height}x{enc.depth} мм
                  </div>
                  {enc.niche && (
                    <div style={{ color: "#e67e22" }}>Ниша: {enc.niche}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Состав компонентов (Components) */}
          <div style={{ marginBottom: "20px" }}>
            <h4>Состав щита:</h4>
            <ul style={{ fontSize: "13px", paddingLeft: "20px" }}>
              {item.components?.map((comp) => (
                <li
                  key={comp.id}
                  style={{
                    marginBottom: "4px",
                    color: comp.is_persistent ? "#2c3e50" : "#7f8c8d",
                  }}
                >
                  {comp.name}{" "}
                  {comp.is_persistent && (
                    <small style={{ color: "#3498db" }}>(обязательно)</small>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
          >
            Свернуть
          </button>
        </div>
      )}

      {/* --- ФУНКЦИИ (видны в списке как иконки) --- */}
      {!expanded && (
        <div
          className="features-preview"
          style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
        >
          {item.features.slice(0, 3).map((f, i) => (
            <span
              key={i}
              style={{
                fontSize: "10px",
                background: "#f0f0f0",
                padding: "2px 6px",
                borderRadius: "10px",
              }}
            >
              {f}
            </span>
          ))}
          {item.features.length > 3 && (
            <span style={{ fontSize: "10px" }}>...</span>
          )}
        </div>
      )}

      {!expanded && (
        <div style={{ marginTop: "15px" }}>
          <button style={{ width: "100%" }}>Подробнее</button>
        </div>
      )}
    </div>
  );
};
