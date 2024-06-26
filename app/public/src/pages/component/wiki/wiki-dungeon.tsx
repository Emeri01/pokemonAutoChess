import React from "react"
import { useTranslation } from "react-i18next"
import { DungeonDetails, DungeonPMDO } from "../../../../../types/enum/Dungeon"
import SynergyIcon from "../icons/synergy-icon"

export function WikiDungeon() {
  const { t } = useTranslation()
  return (
    <div id="wiki-dungeon">
      <ul>
        {(Object.keys(DungeonPMDO) as DungeonPMDO[])
          .sort((a, b) => t(`map.${a}`).localeCompare(t(`map.${b}`)))
          .map((dungeon) => {
            return (
              <li key={dungeon} className="my-box">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>{t(`map.${dungeon}`)}</h3>
                  <div style={{ display: "flex", gap: "5px" }}>
                    {DungeonDetails[dungeon].synergies.map((synergy) => (
                      <SynergyIcon
                        type={synergy}
                        key={"map_synergy_" + synergy}
                      />
                    ))}
                  </div>
                </div>
                <img
                  src={`/assets/maps/${dungeon}-preview.png`}
                  onMouseOver={(e) => {
                    ;(
                      e.target as HTMLImageElement
                    ).src = `/assets/tilesets/${dungeon}/tileset_0.png`
                  }}
                  onMouseOut={(e) => {
                    ;(
                      e.target as HTMLImageElement
                    ).src = `/assets/maps/${dungeon}-preview.png`
                  }}
                  alt={dungeon}
                />
              </li>
            )
          })}
      </ul>
    </div>
  )
}
