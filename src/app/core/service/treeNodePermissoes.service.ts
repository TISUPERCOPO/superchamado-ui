import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class TreeNodePermissoesService {
  treeNodePermissoes: TreeNode[];
  constructor() { }

  criarTreeNodePermissoes() {
    return [

      {
        label: 'Todas Permissões',
        selectable: true,
        data: 'cadastroNode',
        key: 'cadastroNode',

        children: [
          {
            label: 'Empresas',
            data: 'empresas',
            key: 'empresas',
            children: [
              {
                label: 'Criar',
                data: 'empresasCriar',
                key: 'empresasCriar',
              },
              {
                label: 'Visualizar',
                data: 'empresasVisualizar',
                key: 'empresasVisualizar',
              },
              {
                label: 'Editar',
                data: 'empresasEditar',
                key: 'empresasEditar',
              },
              {
                label: 'Status',
                data: 'empresasStatus',
                key: 'empresasStatus',
              },
            ],
          },
         /*  {
            label: 'Convênios',
            data: 'convenios',
            key: 'convenios',
            children: [
              {
                label: 'Criar',
                data: 'conveniosCriar',
                key: 'conveniosCriar',
              },
              {
                label: 'Visualizar',
                data: 'conveniosVisualizar',
                key: 'conveniosVisualizar',
              },
              {
                label: 'Editar',
                data: 'conveniosEditar',
                key: 'conveniosEditar',
              },
              {
                label: 'Excluir',
                data: 'conveniosExcluir',
                key: 'conveniosExcluir',
              },
              {
                label: 'Status',
                data: 'conveniosStatus',
                key: 'conveniosStatus',
              },
            ],
          },
          {
            label: 'Exames',
            data: 'exames',
            key: 'exames',
            children: [
              {
                label: 'Criar',
                data: 'examesCriar',
                key: 'examesCriar',
              },
              {
                label: 'Visualizar',
                data: 'examesVisualizar',
                key: 'examesVisualizar',
              },
              {
                label: 'Editar',
                data: 'examesEditar',
                key: 'examesEditar',
              },
              {
                label: 'Excluir',
                data: 'examesExcluir',
                key: 'examesExcluir',
              },
              {
                label: 'Status',
                data: 'examesStatus',
                key: 'examesStatus',
              },
            ],
          },
          {
            label: 'Pacientes',
            data: 'pacientes',
            key: 'pacientes',
            children: [
              {
                label: 'Criar',
                data: 'pacientesCriar',
                key: 'pacientesCriar',
              },
              {
                label: 'Visualizar',
                data: 'pacientesVisualizar',
                key: 'pacientesVisualizar',
              },
              {
                label: 'Editar',
                data: 'pacientesEditar',
                key: 'pacientesEditar',
              },
              {
                label: 'Excluir',
                data: 'pacientesExcluir',
                key: 'pacientesExcluir',
              },
              {
                label: 'Status',
                data: 'pacientesStatus',
                key: 'pacientesStatus',
              },
            ],
          },
          {
            label: 'Atendimentos',
            data: 'atendimentos',
            key: 'atendimentos',
            children: [
              {
                label: 'Criar',
                data: 'atendimentosCriar',
                key: 'atendimentosCriar',
              },
              {
                label: 'Visualizar',
                data: 'atendimentosVisualizar',
                key: 'atendimentosVisualizar',
              },
              {
                label: 'Editar',
                data: 'atendimentosEditar',
                key: 'atendimentosEditar',
              },
              {
                label: 'Status',
                data: 'atendimentosStatus',
                key: 'atendimentosStatus',
              },
            ],
          },
          {
            label: 'Patrimônios',
            data: 'patrimonios',
            key: 'patrimonios',
            children: [
              {
                label: 'Criar',
                data: 'patrimoniosCriar',
                key: 'patrimoniosCriar',
              },
              {
                label: 'Visualizar',
                data: 'patrimoniosVisualizar',
                key: 'patrimoniosVisualizar',
              },
              {
                label: 'Editar',
                data: 'patrimoniosEditar',
                key: 'patrimoniosEditar',
              },
              {
                label: 'Excluir',
                data: 'patrimoniosExcluir',
                key: 'patrimoniosExcluir',
              },
              {
                label: 'Status',
                data: 'patrimoniosStatus',
                key: 'patrimoniosStatus',
              },
            ],
          }, */
          {
            label: 'Usuários',
            data: 'usuarios',
            key: 'usuarios',
            children: [
              {
                label: 'Criar',
                data: 'usuariosCriar',
                key: 'usuariosCriar',
              },
              {
                label: 'Visualizar',
                data: 'usuariosVisualizar',
                key: 'usuariosVisualizar',
              },
              {
                label: 'Editar',
                data: 'usuariosEditar',
                key: 'usuariosEditar',
              },
              {
                label: 'Status',
                data: 'usuariosStatus',
                key: 'usuariosStatus',
              },
            ],
          },
          {
            label: 'Sac',
            data: 'sacs',
            key: 'sacs',
            children: [
              {
                label: 'Criar',
                data: 'sacCriar',
                key: 'sacCriar',
              },
              {
                label: 'Visualizar',
                data: 'sacVisualizar',
                key: 'sacVisualizar',
              },
              {
                label: 'Editar',
                data: 'sacEditar',
                key: 'sacEditar',
              },
              {
                label: 'Status',
                data: 'sacStatus',
                key: 'sacStatus',
              },
            ],
          },
          {
            label: 'Setor',
            data: 'setores',
            key: 'setores',
            children: [
              {
                label: 'Criar',
                data: 'setorCriar',
                key: 'setorCriar',
              },
              {
                label: 'Visualizar',
                data: 'setorVisualizar',
                key: 'setorVisualizar',
              },
              {
                label: 'Editar',
                data: 'setorEditar',
                key: 'setorEditar',
              },
              {
                label: 'Status',
                data: 'setorStatus',
                key: 'setorStatus',
              },
            ],
          },
          {
            label: 'Categoria',
            data: 'categorias',
            key: 'categorias',
            children: [
              {
                label: 'Criar',
                data: 'categoriaCriar',
                key: 'categoriaCriar',
              },
              {
                label: 'Visualizar',
                data: 'categoriaVisualizar',
                key: 'categoriaVisualizar',
              },
              {
                label: 'Editar',
                data: 'categoriaEditar',
                key: 'categoriaEditar',
              },
              {
                label: 'Status',
                data: 'categoriaStatus',
                key: 'categoriaStatus',
              },
            ],
          },
          {
            label: 'Chamado',
            data: 'chamados',
            key: 'chamados',
            children: [
              {
                label: 'Criar',
                data: 'chamadoCriar',
                key: 'chamadoCriar',
              },
              {
                label: 'Visualizar',
                data: 'chamadoVisualizar',
                key: 'chamadoVisualizar',
              },
              {
                label: 'Editar',
                data: 'chamadoEditar',
                key: 'chamadoEditar',
              },
              {
                label: 'Status',
                data: 'chamadoStatus',
                key: 'chamadoStatus',
              },
            ],
          },
          {
            label: 'Relatórios',
            data: 'relatorios',
            key: 'relatorios',
            children: [
              {
                label: 'Visualizar',
                data: 'relatoriosVisualizar',
                key: 'relatoriosVisualizar',
              }
            ],
          },

        ]
      }
    ];
  }
}
