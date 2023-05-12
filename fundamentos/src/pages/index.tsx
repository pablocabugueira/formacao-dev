import MenuItem from "@/components/templates/MenuItem";
import Menu from "@/components/templates/Menu";
import Page from "@/components/templates/Page";
import { Icon24Hours, IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconH1, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react";
import Line from "@/components/layouts/Line";

export default function Home() {
  return (
    <Page>
      <Menu>
          <Line>
            <MenuItem
              icone={<IconSourceCode />}
              url="/hour.html"
              className="bg-gradient-to-r from-red-500 to-yellow-500"
              >
                Hora (Estático)
            </MenuItem>

            <MenuItem
              icone={<IconSourceCode />}
              url="/currentTime.html"
              className="bg-gradient-to-r from-red-500 to-yellow-500"
              >
                Hora com JS (Estático)
            </MenuItem>
            
            <MenuItem
              icone={<IconClock />}
              url="/api/hour"
              className="bg-gradient-to-r from-red-500 to-yellow-500"
              >
                Hora (Dinâmico)
            </MenuItem>

            <MenuItem
              icone={<IconTable />}
              url="/api/table?columns=3&lines=5"
              className="bg-gradient-to-r from-red-500 to-yellow-500"
              >
                Tabela (Dinâmico)
            </MenuItem>

            <MenuItem
              icone={<IconArrowsDiff />}
              url="/api/users"
              className="bg-gradient-to-r from-red-500 to-yellow-500"
              >
                API de usuários
            </MenuItem>
          </Line>
          <Line>
            <MenuItem
              icone={<IconH1 />}
              url="/examples/basicPage"
              className="bg-gradient-to-r from-cyan-500 to-red-500"
              >
                Componente Básico
            </MenuItem>

            <MenuItem
              icone={<IconClick />}
              url="/examples/eventPage"
              className="bg-gradient-to-r from-cyan-500 to-red-500"
              >
                Eventos
            </MenuItem>

            <MenuItem
              icone={<IconSitemap />}
              url="/examples/children"
              className="bg-gradient-to-r from-cyan-500 to-red-500"
              >
                Filhos
            </MenuItem>

            <MenuItem
              icone={<IconArrowMoveDown />}
              url="/examples/directCommunication"
              className="bg-gradient-to-r from-cyan-500 to-red-500"
              >
                Comunicação Direta
            </MenuItem>

            <MenuItem
              icone={<IconArrowMoveUp />}
              url="/examples/indirectCommunication"
              className="bg-gradient-to-r from-cyan-500 to-red-500"
              >
                Comunicação Indireta
            </MenuItem>
          </Line>
      </Menu>
    </Page>
  )
}