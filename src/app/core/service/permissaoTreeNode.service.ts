import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PermissaoTreeNodeService {
  constructor(private router: Router) { }

  permissaoTreeNode(selected: any, permissao: any) {
    for (const i of Object.keys(selected)) {
      switch (selected[i].data) {

        // Permissão em Empresas---------------------------------
        case 'empresasCriar':
          permissao[0].permission.create = true;
          break;
        case 'empresasVisualizar':
          console.log('permissao:', permissao);
          console.log('permissao[6]:', permissao[6]);
          permissao[0].permission.read = true;
          break;
        case 'empresasEditar':
          permissao[0].permission.update = true;
          break;
        case 'empresasStatus':
          permissao[0].permission.status = true;
          break;
        case 'empresasExcluir':
          permissao[0].permission.delete = true;
          break;


        // Permissão em Usuarios---------------------------------
        case 'usuariosCriar':
          permissao[1].permission.create = true;
          break;
        case 'usuariosVisualizar':
          permissao[1].permission.read = true;
          break;
        case 'usuariosEditar':
          permissao[1].permission.update = true;
          break;
        case 'usuariosStatus':
          permissao[1].permission.status = true;
          break;
        case 'usuariosExcluir':
          permissao[1].permission.delete = true;
          break;

        // Permissão em Relatório-------------------------------------
        case 'relatoriosVisualizar':
          permissao[2].permission.read = true;
          break;


        // Permissão em Sac---------------------------------
        case 'sacCriar':
          permissao[3].permission.create = true;
          break;
        case 'sacVisualizar':
          permissao[3].permission.read = true;
          break;
        case 'sacEditar':
          permissao[3].permission.update = true;
          break;
        case 'sacStatus':
          permissao[3].permission.status = true;
          break;
        case 'sacExcluir':
          permissao[3].permission.delete = true;
          break;

        // Permissão em Setor---------------------------------
        case 'setorCriar':
          permissao[4].permission.create = true;
          break;
        case 'setorVisualizar':
          permissao[4].permission.read = true;
          break;
        case 'setorEditar':
          permissao[4].permission.update = true;
          break;
        case 'setorStatus':
          permissao[4].permission.status = true;
          break;
        case 'setorExcluir':
          permissao[4].permission.delete = true;
          break;

        // Permissão em Categoria---------------------------------
        case 'categoriaCriar':
          permissao[5].permission.create = true;
          break;
        case 'categoriaVisualizar':
          permissao[5].permission.read = true;
          break;
        case 'categoriaEditar':
          permissao[5].permission.update = true;
          break;
        case 'categoriaStatus':
          permissao[5].permission.status = true;
          break;
        case 'categoriaExcluir':
          permissao[5].permission.delete = true;
          break;

        // Permissão em Chamado---------------------------------
        case 'chamadoCriar':
          permissao[6].permission.create = true;
          break;
        case 'chamadoVisualizar':
          permissao[6].permission.read = true;
          break;
        case 'chamadoEditar':
          permissao[6].permission.update = true;
          break;
        case 'chamadoStatus':
          permissao[6].permission.status = true;
          break;
        case 'chamadoExcluir':
          permissao[6].permission.delete = true;
          break;
      }
    }

  }
  carregarPermissoesTreeNode(permissao: any, selectedpermissao: any) {
    // Início de Permissao de Atendimentos--------------------------------------------------------------
    if (permissao[0].permission.create !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'empresaCriar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[0].permission.read !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'empresaVisualizar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[0].permission.update !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'empresaEditar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[0].permission.status !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'empresaStatus') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[0].permission.status !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'empresaExcluir') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (
      permissao[0].permission.create !== true &&
      permissao[0].permission.read !== true &&
      permissao[0].permission.update !== true &&
      permissao[0].permission.status !== true &&
      permissao[0].permission.delete !== true
    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'empresas') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    // Fim permissao de Atendimentos -------------------------------------------------------------------

    // Início de Permissao de Convenios--------------------------------------------------------------
    if (permissao[1].permission.create !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'usuarioCriar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[1].permission.read !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'usuarioVisualizar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[1].permission.update !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'usuarioEditar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[1].permission.status !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'usuarioStatus') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[1].permission.delete !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'usuarioExcluir') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (
      permissao[1].permission.create !== true &&
      permissao[1].permission.read !== true &&
      permissao[1].permission.update !== true &&
      permissao[1].permission.status !== true &&
      permissao[1].permission.delete !== true
    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'usuarios') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    // Fim permissao de Convenios -------------------------------------------------------------------

    // Início de Permissao de Exames--------------------------------------------------------------

    if (permissao[2].permission.read !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'relatorioVisualizar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }

    if (
      permissao[2].permission.read !== true

    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'relatorios') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    // Fim permissao de Exames -------------------------------------------------------------------

    // Início de Permissao de Pacientes--------------------------------------------------------------
    if (permissao[3].permission.create !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'sacCriar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[3].permission.read !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'sacVisualizar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[3].permission.update !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'sacEditar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[3].permission.status !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'sacStatus') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[3].permission.delete !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'sacExcluir') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (
      permissao[3].permission.create !== true &&
      permissao[3].permission.read !== true &&
      permissao[3].permission.update !== true &&
      permissao[3].permission.status !== true &&
      permissao[3].permission.delete !== true
    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'sacs') {
          selectedpermissao.splice(index, 1);
        }
      });
    }

    // Fim permissao de Patrimonios -------------------------------------------------------------------

    // Início de Permissao de Setor--------------------------------------------------------------
    if (permissao[4].permission.create !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'setorCriar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[4].permission.read !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'setorVisualizar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[4].permission.update !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'setorEditar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[4].permission.status !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'setorStatus') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[4].permission.delete !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'setorExcluir') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (
      permissao[4].permission.create !== true &&
      permissao[4].permission.read !== true &&
      permissao[4].permission.update !== true &&
      permissao[4].permission.status !== true &&
      permissao[4].permission.delete !== true
    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'setores') {
          selectedpermissao.splice(index, 1);
        }
      });
    }

    // Fim permissao de Setor -------------------------------------------------------------------

    // Início de Permissao de Categoria--------------------------------------------------------------
    if (permissao[5].permission.create !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'categoriaCriar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[5].permission.read !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'categoriaVisualizar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[5].permission.update !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'categoriaEditar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[5].permission.status !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'categoriaStatus') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[5].permission.delete !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'categoriaExcluir') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (
      permissao[5].permission.create !== true &&
      permissao[5].permission.read !== true &&
      permissao[5].permission.update !== true &&
      permissao[5].permission.status !== true &&
      permissao[5].permission.delete !== true
    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'categorias') {
          selectedpermissao.splice(index, 1);
        }
      });
    }

    // Fim permissao de Categorias -------------------------------------------------------------------

    // Início de Permissao de Chamados--------------------------------------------------------------
    if (permissao[6].permission.create !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'chamadoCriar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[6].permission.read !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'chamadoVisualizar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[6].permission.update !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'chamadoEditar') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[6].permission.status !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'chamadoStatus') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (permissao[6].permission.delete !== true) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'chamadoExcluir') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
    if (
      permissao[6].permission.create !== true &&
      permissao[6].permission.read !== true &&
      permissao[6].permission.update !== true &&
      permissao[6].permission.status !== true &&
      permissao[6].permission.delete !== true
    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'chamado') {
          selectedpermissao.splice(index, 1);
        }
      });
    }

    // Fim permissao de Patrimonios -------------------------------------------------------------------

    // Verificar Node de Cadastro-------------------------------------------------------------------
    if (
      permissao[0].permission.create !== true &&
      permissao[0].permission.read !== true &&
      permissao[0].permission.update !== true &&
      permissao[0].permission.status !== true &&
      permissao[0].permission.delete !== true &&
      permissao[1].permission.create !== true &&
      permissao[1].permission.read !== true &&
      permissao[1].permission.update !== true &&
      permissao[1].permission.status !== true &&
      permissao[1].permission.delete !== true &&
      permissao[2].permission.create !== true &&
      permissao[2].permission.read !== true &&
      permissao[2].permission.update !== true &&
      permissao[2].permission.status !== true &&
      permissao[2].permission.delete !== true &&
      permissao[3].permission.create !== true &&
      permissao[3].permission.read !== true &&
      permissao[3].permission.update !== true &&
      permissao[3].permission.status !== true &&
      permissao[3].permission.delete !== true &&
      permissao[4].permission.read !== true &&
      permissao[4].permission.update !== true &&
      permissao[4].permission.delete !== true &&
      permissao[5].permission.create !== true &&
      permissao[5].permission.read !== true &&
      permissao[5].permission.update !== true &&
      permissao[5].permission.status !== true &&
      permissao[5].permission.delete !== true &&
      permissao[6].permission.create !== true &&
      permissao[6].permission.read !== true &&
      permissao[6].permission.update !== true &&
      permissao[6].permission.status !== true &&
      permissao[6].permission.delete !== true &&
      permissao[7].permission.create !== true &&
      permissao[7].permission.read !== true &&
      permissao[7].permission.update !== true &&
      permissao[7].permission.status !== true &&
      permissao[7].permission.delete !== true
    ) {
      selectedpermissao.forEach((item, index) => {
        if (item.data === 'cadastroNode') {
          selectedpermissao.splice(index, 1);
        }
      });
    }
  }
}
