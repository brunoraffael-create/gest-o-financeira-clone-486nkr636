// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.5'
  }
  public: {
    Tables: {
      afastamentos: {
        Row: {
          colaborador_id: string | null
          created_at: string
          data_fim: string
          data_inicio: string
          id: string
          observacoes: string | null
          organization_id: string | null
          status: string | null
          tipo_afastamento: string
        }
        Insert: {
          colaborador_id?: string | null
          created_at?: string
          data_fim: string
          data_inicio: string
          id?: string
          observacoes?: string | null
          organization_id?: string | null
          status?: string | null
          tipo_afastamento: string
        }
        Update: {
          colaborador_id?: string | null
          created_at?: string
          data_fim?: string
          data_inicio?: string
          id?: string
          observacoes?: string | null
          organization_id?: string | null
          status?: string | null
          tipo_afastamento?: string
        }
        Relationships: [
          {
            foreignKeyName: 'afastamentos_colaborador_id_fkey'
            columns: ['colaborador_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'afastamentos_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      avaliacoes: {
        Row: {
          avaliador_id: string | null
          colaborador_id: string | null
          comentarios: string | null
          created_at: string
          data_avaliacao: string
          id: string
          nota: number | null
          nota_pontualidade: number | null
          nota_qualidade: number | null
          nota_trabalho_equipe: number | null
          observacoes: string | null
          organization_id: string | null
          periodo: string | null
        }
        Insert: {
          avaliador_id?: string | null
          colaborador_id?: string | null
          comentarios?: string | null
          created_at?: string
          data_avaliacao: string
          id?: string
          nota?: number | null
          nota_pontualidade?: number | null
          nota_qualidade?: number | null
          nota_trabalho_equipe?: number | null
          observacoes?: string | null
          organization_id?: string | null
          periodo?: string | null
        }
        Update: {
          avaliador_id?: string | null
          colaborador_id?: string | null
          comentarios?: string | null
          created_at?: string
          data_avaliacao?: string
          id?: string
          nota?: number | null
          nota_pontualidade?: number | null
          nota_qualidade?: number | null
          nota_trabalho_equipe?: number | null
          observacoes?: string | null
          organization_id?: string | null
          periodo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'avaliacoes_avaliador_id_fkey'
            columns: ['avaliador_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'avaliacoes_colaborador_id_fkey'
            columns: ['colaborador_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'avaliacoes_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      colaboradores: {
        Row: {
          adicional_insalubridade: boolean | null
          adicional_periculosidade: boolean | null
          auxilio_creche: boolean | null
          carga_horaria_diaria: number | null
          carga_horaria_mensal: number | null
          carga_horaria_semanal: number | null
          cargo: string | null
          cidade_lotacao: string | null
          codigo_interno: string | null
          cpf: string | null
          created_at: string
          data_admissao: string | null
          data_desligamento: string | null
          data_fim_escala: string | null
          data_inicio_escala: string | null
          data_nascimento: string | null
          departamento: string | null
          descanso_interjornada_horas: number | null
          dias_trabalhados: string | null
          documentos_urls: Json | null
          elegivel_troca: boolean | null
          email: string | null
          email_corporativo: string | null
          endereco: string | null
          escala_padrao: string | null
          fim_almoco: string | null
          funcao_escala: string | null
          grau_insalubridade: number | null
          gympass: boolean | null
          horario_almoco: string | null
          horario_entrada: string | null
          horario_saida: string | null
          id: string
          image_gender: string | null
          inicio_almoco: string | null
          matricula: string | null
          motivo_indisponibilidade: string | null
          nome: string
          organization_id: string | null
          plano_odontologico: boolean | null
          plano_saude: boolean | null
          pode_fazer_extra: boolean | null
          quantidade_dependentes: number | null
          quantidade_va: number | null
          quantidade_vr: number | null
          quantidade_vt: number | null
          rg: string | null
          role: string
          salario: number | null
          salario_familia: boolean | null
          seguro_vida: boolean | null
          setor_escala: string | null
          status: string | null
          status_operacional: string | null
          supervisor_id: string | null
          telefone: string | null
          tipo_contrato: string | null
          tipo_jornada_id: string | null
          tipo_rescisao: string | null
          trabalha_fim_semana: boolean | null
          turno_padrao: string | null
          user_id: string | null
          vale_alimentacao: boolean | null
          vale_refeicao: boolean | null
          vale_transporte: boolean | null
          valor_auxilio_creche: number | null
          valor_plano_odontologico: number | null
          valor_plano_saude: number | null
          valor_seguro_vida: number | null
          valor_va_mensal: number | null
          valor_vr_diario: number | null
          valor_vt_diario: number | null
        }
        Insert: {
          adicional_insalubridade?: boolean | null
          adicional_periculosidade?: boolean | null
          auxilio_creche?: boolean | null
          carga_horaria_diaria?: number | null
          carga_horaria_mensal?: number | null
          carga_horaria_semanal?: number | null
          cargo?: string | null
          cidade_lotacao?: string | null
          codigo_interno?: string | null
          cpf?: string | null
          created_at?: string
          data_admissao?: string | null
          data_desligamento?: string | null
          data_fim_escala?: string | null
          data_inicio_escala?: string | null
          data_nascimento?: string | null
          departamento?: string | null
          descanso_interjornada_horas?: number | null
          dias_trabalhados?: string | null
          documentos_urls?: Json | null
          elegivel_troca?: boolean | null
          email?: string | null
          email_corporativo?: string | null
          endereco?: string | null
          escala_padrao?: string | null
          fim_almoco?: string | null
          funcao_escala?: string | null
          grau_insalubridade?: number | null
          gympass?: boolean | null
          horario_almoco?: string | null
          horario_entrada?: string | null
          horario_saida?: string | null
          id?: string
          image_gender?: string | null
          inicio_almoco?: string | null
          matricula?: string | null
          motivo_indisponibilidade?: string | null
          nome: string
          organization_id?: string | null
          plano_odontologico?: boolean | null
          plano_saude?: boolean | null
          pode_fazer_extra?: boolean | null
          quantidade_dependentes?: number | null
          quantidade_va?: number | null
          quantidade_vr?: number | null
          quantidade_vt?: number | null
          rg?: string | null
          role?: string
          salario?: number | null
          salario_familia?: boolean | null
          seguro_vida?: boolean | null
          setor_escala?: string | null
          status?: string | null
          status_operacional?: string | null
          supervisor_id?: string | null
          telefone?: string | null
          tipo_contrato?: string | null
          tipo_jornada_id?: string | null
          tipo_rescisao?: string | null
          trabalha_fim_semana?: boolean | null
          turno_padrao?: string | null
          user_id?: string | null
          vale_alimentacao?: boolean | null
          vale_refeicao?: boolean | null
          vale_transporte?: boolean | null
          valor_auxilio_creche?: number | null
          valor_plano_odontologico?: number | null
          valor_plano_saude?: number | null
          valor_seguro_vida?: number | null
          valor_va_mensal?: number | null
          valor_vr_diario?: number | null
          valor_vt_diario?: number | null
        }
        Update: {
          adicional_insalubridade?: boolean | null
          adicional_periculosidade?: boolean | null
          auxilio_creche?: boolean | null
          carga_horaria_diaria?: number | null
          carga_horaria_mensal?: number | null
          carga_horaria_semanal?: number | null
          cargo?: string | null
          cidade_lotacao?: string | null
          codigo_interno?: string | null
          cpf?: string | null
          created_at?: string
          data_admissao?: string | null
          data_desligamento?: string | null
          data_fim_escala?: string | null
          data_inicio_escala?: string | null
          data_nascimento?: string | null
          departamento?: string | null
          descanso_interjornada_horas?: number | null
          dias_trabalhados?: string | null
          documentos_urls?: Json | null
          elegivel_troca?: boolean | null
          email?: string | null
          email_corporativo?: string | null
          endereco?: string | null
          escala_padrao?: string | null
          fim_almoco?: string | null
          funcao_escala?: string | null
          grau_insalubridade?: number | null
          gympass?: boolean | null
          horario_almoco?: string | null
          horario_entrada?: string | null
          horario_saida?: string | null
          id?: string
          image_gender?: string | null
          inicio_almoco?: string | null
          matricula?: string | null
          motivo_indisponibilidade?: string | null
          nome?: string
          organization_id?: string | null
          plano_odontologico?: boolean | null
          plano_saude?: boolean | null
          pode_fazer_extra?: boolean | null
          quantidade_dependentes?: number | null
          quantidade_va?: number | null
          quantidade_vr?: number | null
          quantidade_vt?: number | null
          rg?: string | null
          role?: string
          salario?: number | null
          salario_familia?: boolean | null
          seguro_vida?: boolean | null
          setor_escala?: string | null
          status?: string | null
          status_operacional?: string | null
          supervisor_id?: string | null
          telefone?: string | null
          tipo_contrato?: string | null
          tipo_jornada_id?: string | null
          tipo_rescisao?: string | null
          trabalha_fim_semana?: boolean | null
          turno_padrao?: string | null
          user_id?: string | null
          vale_alimentacao?: boolean | null
          vale_refeicao?: boolean | null
          vale_transporte?: boolean | null
          valor_auxilio_creche?: number | null
          valor_plano_odontologico?: number | null
          valor_plano_saude?: number | null
          valor_seguro_vida?: number | null
          valor_va_mensal?: number | null
          valor_vr_diario?: number | null
          valor_vt_diario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'colaboradores_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'colaboradores_supervisor_id_fkey'
            columns: ['supervisor_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'colaboradores_tipo_jornada_id_fkey'
            columns: ['tipo_jornada_id']
            isOneToOne: false
            referencedRelation: 'tipos_jornada'
            referencedColumns: ['id']
          },
        ]
      }
      escalas: {
        Row: {
          colaborador_id: string | null
          created_at: string
          data: string
          horario_entrada: string | null
          horario_saida: string | null
          id: string
          organization_id: string | null
          tipo: string
        }
        Insert: {
          colaborador_id?: string | null
          created_at?: string
          data: string
          horario_entrada?: string | null
          horario_saida?: string | null
          id?: string
          organization_id?: string | null
          tipo?: string
        }
        Update: {
          colaborador_id?: string | null
          created_at?: string
          data?: string
          horario_entrada?: string | null
          horario_saida?: string | null
          id?: string
          organization_id?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: 'escalas_colaborador_id_fkey'
            columns: ['colaborador_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'escalas_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      escalas_semanais: {
        Row: {
          colaborador_id: string | null
          created_at: string
          data_inicio_semana: string
          horas_previstas: number | null
          horas_realizadas: number | null
          horas_semana: number | null
          id: string
          observacao: string | null
          organization_id: string | null
          saldo_horas: number | null
          status: string | null
          troca_reposicao: string | null
        }
        Insert: {
          colaborador_id?: string | null
          created_at?: string
          data_inicio_semana: string
          horas_previstas?: number | null
          horas_realizadas?: number | null
          horas_semana?: number | null
          id?: string
          observacao?: string | null
          organization_id?: string | null
          saldo_horas?: number | null
          status?: string | null
          troca_reposicao?: string | null
        }
        Update: {
          colaborador_id?: string | null
          created_at?: string
          data_inicio_semana?: string
          horas_previstas?: number | null
          horas_realizadas?: number | null
          horas_semana?: number | null
          id?: string
          observacao?: string | null
          organization_id?: string | null
          saldo_horas?: number | null
          status?: string | null
          troca_reposicao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'escalas_semanais_colaborador_id_fkey'
            columns: ['colaborador_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'escalas_semanais_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      ferias: {
        Row: {
          colaborador_id: string | null
          created_at: string
          data_fim: string
          data_inicio: string
          id: string
          organization_id: string | null
          status: string | null
        }
        Insert: {
          colaborador_id?: string | null
          created_at?: string
          data_fim: string
          data_inicio: string
          id?: string
          organization_id?: string | null
          status?: string | null
        }
        Update: {
          colaborador_id?: string | null
          created_at?: string
          data_fim?: string
          data_inicio?: string
          id?: string
          organization_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'ferias_colaborador_id_fkey'
            columns: ['colaborador_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ferias_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      funcoes: {
        Row: {
          created_at: string
          id: string
          nome: string
          organization_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          nome: string
          organization_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          nome?: string
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'funcoes_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          nome: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          nome: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          nome?: string
        }
        Relationships: []
      }
      ponto: {
        Row: {
          colaborador_id: string | null
          created_at: string
          data: string
          hora_entrada: string | null
          hora_saida: string | null
          id: string
          organization_id: string | null
        }
        Insert: {
          colaborador_id?: string | null
          created_at?: string
          data: string
          hora_entrada?: string | null
          hora_saida?: string | null
          id?: string
          organization_id?: string | null
        }
        Update: {
          colaborador_id?: string | null
          created_at?: string
          data?: string
          hora_entrada?: string | null
          hora_saida?: string | null
          id?: string
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'ponto_colaborador_id_fkey'
            columns: ['colaborador_id']
            isOneToOne: false
            referencedRelation: 'colaboradores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ponto_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      recrutamento: {
        Row: {
          created_at: string
          id: string
          image_gender: string | null
          nome_candidato: string
          organization_id: string | null
          status: string
          vaga: string
          vaga_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_gender?: string | null
          nome_candidato: string
          organization_id?: string | null
          status: string
          vaga: string
          vaga_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_gender?: string | null
          nome_candidato?: string
          organization_id?: string | null
          status?: string
          vaga?: string
          vaga_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'recrutamento_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'recrutamento_vaga_id_fkey'
            columns: ['vaga_id']
            isOneToOne: false
            referencedRelation: 'vagas'
            referencedColumns: ['id']
          },
        ]
      }
      setores: {
        Row: {
          created_at: string
          id: string
          nome: string
          organization_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          nome: string
          organization_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          nome?: string
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'setores_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      tipos_jornada: {
        Row: {
          carga_horaria_semanal: number | null
          created_at: string
          descanso_minimo_horas: number | null
          id: string
          nome: string
          organization_id: string | null
          permite_fim_semana: boolean | null
          permite_noturno: boolean | null
        }
        Insert: {
          carga_horaria_semanal?: number | null
          created_at?: string
          descanso_minimo_horas?: number | null
          id?: string
          nome: string
          organization_id?: string | null
          permite_fim_semana?: boolean | null
          permite_noturno?: boolean | null
        }
        Update: {
          carga_horaria_semanal?: number | null
          created_at?: string
          descanso_minimo_horas?: number | null
          id?: string
          nome?: string
          organization_id?: string | null
          permite_fim_semana?: boolean | null
          permite_noturno?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: 'tipos_jornada_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          category: string
          created_at: string | null
          date: string
          description: string
          id: string
          notes: string | null
          payment_method: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string | null
          date: string
          description: string
          id?: string
          notes?: string | null
          payment_method: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string | null
          date?: string
          description?: string
          id?: string
          notes?: string | null
          payment_method?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      turnos_padrao: {
        Row: {
          bloqueia_dia_seguinte: boolean | null
          carga_horaria: number
          codigo: string
          conta_hora: boolean | null
          created_at: string
          descricao: string | null
          hora_fim: string | null
          hora_inicio: string | null
          id: string
          organization_id: string | null
          tipo_turno: string | null
        }
        Insert: {
          bloqueia_dia_seguinte?: boolean | null
          carga_horaria?: number
          codigo: string
          conta_hora?: boolean | null
          created_at?: string
          descricao?: string | null
          hora_fim?: string | null
          hora_inicio?: string | null
          id?: string
          organization_id?: string | null
          tipo_turno?: string | null
        }
        Update: {
          bloqueia_dia_seguinte?: boolean | null
          carga_horaria?: number
          codigo?: string
          conta_hora?: boolean | null
          created_at?: string
          descricao?: string | null
          hora_fim?: string | null
          hora_inicio?: string | null
          id?: string
          organization_id?: string | null
          tipo_turno?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'turnos_padrao_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      vagas: {
        Row: {
          created_at: string
          descricao: string | null
          id: string
          organization_id: string | null
          status: string | null
          titulo: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          id?: string
          organization_id?: string | null
          status?: string | null
          titulo: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          id?: string
          organization_id?: string | null
          status?: string | null
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: 'vagas_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_dashboard_kpi: { Args: { p_date_now: string }; Returns: Json }
      get_latest_transaction_id: { Args: never; Returns: string }
      get_my_org_id: { Args: never; Returns: string }
      get_user_role: { Args: never; Returns: string }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

// ====== DATABASE EXTENDED CONTEXT (auto-generated) ======
// This section contains actual PostgreSQL column types, constraints, RLS policies,
// functions, triggers, indexes and materialized views not present in the type definitions above.
// IMPORTANT: The TypeScript types above map UUID, TEXT, VARCHAR all to "string".
// Use the COLUMN TYPES section below to know the real PostgreSQL type for each column.
// Always use the correct PostgreSQL type when writing SQL migrations.

// --- COLUMN TYPES (actual PostgreSQL types) ---
// Use this to know the real database type when writing migrations.
// "string" in TypeScript types above may be uuid, text, varchar, timestamptz, etc.
// Table: afastamentos
//   id: uuid (not null, default: gen_random_uuid())
//   colaborador_id: uuid (nullable)
//   tipo_afastamento: text (not null)
//   data_inicio: date (not null)
//   data_fim: date (not null)
//   observacoes: text (nullable)
//   status: text (nullable, default: 'Aprovado'::text)
//   organization_id: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
// Table: avaliacoes
//   id: uuid (not null, default: gen_random_uuid())
//   organization_id: uuid (nullable)
//   colaborador_id: uuid (nullable)
//   data_avaliacao: date (not null)
//   nota: numeric (nullable)
//   comentarios: text (nullable)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   avaliador_id: uuid (nullable)
//   periodo: text (nullable)
//   nota_pontualidade: numeric (nullable)
//   nota_qualidade: numeric (nullable)
//   nota_trabalho_equipe: numeric (nullable)
//   observacoes: text (nullable)
// Table: colaboradores
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   nome: text (not null)
//   cpf: text (nullable)
//   rg: text (nullable)
//   data_nascimento: date (nullable)
//   endereco: text (nullable)
//   email: text (nullable)
//   telefone: text (nullable)
//   cargo: text (nullable)
//   departamento: text (nullable)
//   data_admissao: date (nullable)
//   salario: numeric (nullable)
//   tipo_contrato: text (nullable)
//   status: text (nullable, default: 'Ativo'::text)
//   documentos_urls: jsonb (nullable, default: '[]'::jsonb)
//   image_gender: text (nullable, default: 'male'::text)
//   role: text (not null, default: 'Colaborador'::text)
//   user_id: uuid (nullable)
//   organization_id: uuid (nullable)
//   horario_entrada: text (nullable)
//   horario_saida: text (nullable)
//   horario_almoco: text (nullable)
//   adicional_insalubridade: boolean (nullable, default: false)
//   adicional_periculosidade: boolean (nullable, default: false)
//   quantidade_dependentes: integer (nullable, default: 0)
//   data_desligamento: date (nullable)
//   tipo_rescisao: text (nullable)
//   matricula: text (nullable)
//   email_corporativo: text (nullable)
//   cidade_lotacao: text (nullable)
//   inicio_almoco: text (nullable)
//   fim_almoco: text (nullable)
//   dias_trabalhados: text (nullable)
//   carga_horaria_semanal: numeric (nullable)
//   vale_transporte: boolean (nullable, default: false)
//   valor_vt_diario: numeric (nullable, default: 0)
//   vale_refeicao: boolean (nullable, default: false)
//   valor_vr_diario: numeric (nullable, default: 0)
//   vale_alimentacao: boolean (nullable, default: false)
//   valor_va_mensal: numeric (nullable, default: 0)
//   plano_saude: boolean (nullable, default: false)
//   valor_plano_saude: numeric (nullable, default: 0)
//   plano_odontologico: boolean (nullable, default: false)
//   valor_plano_odontologico: numeric (nullable, default: 0)
//   auxilio_creche: boolean (nullable, default: false)
//   valor_auxilio_creche: numeric (nullable, default: 0)
//   seguro_vida: boolean (nullable, default: false)
//   valor_seguro_vida: numeric (nullable, default: 0)
//   salario_familia: boolean (nullable, default: false)
//   gympass: boolean (nullable, default: false)
//   codigo_interno: text (nullable)
//   setor_escala: text (nullable)
//   funcao_escala: text (nullable)
//   tipo_jornada_id: uuid (nullable)
//   turno_padrao: text (nullable)
//   escala_padrao: text (nullable)
//   carga_horaria_diaria: numeric (nullable)
//   carga_horaria_mensal: numeric (nullable)
//   descanso_interjornada_horas: numeric (nullable)
//   trabalha_fim_semana: boolean (nullable, default: false)
//   elegivel_troca: boolean (nullable, default: true)
//   supervisor_id: uuid (nullable)
//   pode_fazer_extra: boolean (nullable, default: true)
//   status_operacional: text (nullable, default: 'Ativo'::text)
//   data_inicio_escala: date (nullable)
//   data_fim_escala: date (nullable)
//   motivo_indisponibilidade: text (nullable)
//   quantidade_vt: numeric (nullable, default: 0)
//   quantidade_vr: numeric (nullable, default: 0)
//   quantidade_va: numeric (nullable, default: 0)
//   grau_insalubridade: numeric (nullable, default: 0)
// Table: escalas
//   id: uuid (not null, default: gen_random_uuid())
//   colaborador_id: uuid (nullable)
//   data: date (not null)
//   tipo: text (not null, default: 'Trabalho'::text)
//   horario_entrada: text (nullable)
//   horario_saida: text (nullable)
//   organization_id: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
// Table: escalas_semanais
//   id: uuid (not null, default: gen_random_uuid())
//   colaborador_id: uuid (nullable)
//   data_inicio_semana: date (not null)
//   horas_semana: numeric (nullable)
//   status: text (nullable)
//   troca_reposicao: text (nullable)
//   observacao: text (nullable)
//   organization_id: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
//   horas_previstas: numeric (nullable, default: 0)
//   horas_realizadas: numeric (nullable, default: 0)
//   saldo_horas: numeric (nullable, default: 0)
// Table: ferias
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   colaborador_id: uuid (nullable)
//   data_inicio: date (not null)
//   data_fim: date (not null)
//   status: text (nullable, default: 'Pendente'::text)
//   organization_id: uuid (nullable)
// Table: funcoes
//   id: uuid (not null, default: gen_random_uuid())
//   nome: text (not null)
//   organization_id: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
// Table: organizations
//   id: uuid (not null, default: gen_random_uuid())
//   nome: text (not null)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   created_by: uuid (nullable, default: auth.uid())
// Table: ponto
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   colaborador_id: uuid (nullable)
//   data: date (not null)
//   hora_entrada: text (nullable)
//   hora_saida: text (nullable)
//   organization_id: uuid (nullable)
// Table: profiles
//   id: uuid (not null)
//   full_name: text (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   role: text (not null, default: 'visitante'::text)
// Table: recrutamento
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   nome_candidato: text (not null)
//   vaga: text (not null)
//   status: text (not null)
//   image_gender: text (nullable, default: 'male'::text)
//   organization_id: uuid (nullable)
//   vaga_id: uuid (nullable)
// Table: setores
//   id: uuid (not null, default: gen_random_uuid())
//   nome: text (not null)
//   organization_id: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
// Table: tipos_jornada
//   id: uuid (not null, default: gen_random_uuid())
//   nome: text (not null)
//   carga_horaria_semanal: numeric (nullable)
//   descanso_minimo_horas: numeric (nullable)
//   permite_noturno: boolean (nullable, default: false)
//   permite_fim_semana: boolean (nullable, default: false)
//   organization_id: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
// Table: transactions
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   date: date (not null)
//   description: text (not null)
//   category: text (not null)
//   type: text (not null)
//   amount: numeric (not null)
//   payment_method: text (not null)
//   notes: text (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
// Table: turnos_padrao
//   id: uuid (not null, default: gen_random_uuid())
//   codigo: text (not null)
//   descricao: text (nullable)
//   hora_inicio: text (nullable)
//   hora_fim: text (nullable)
//   carga_horaria: numeric (not null, default: 0)
//   tipo_turno: text (nullable)
//   conta_hora: boolean (nullable, default: true)
//   bloqueia_dia_seguinte: boolean (nullable, default: false)
//   organization_id: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
// Table: vagas
//   id: uuid (not null, default: gen_random_uuid())
//   organization_id: uuid (nullable)
//   titulo: text (not null)
//   descricao: text (nullable)
//   status: text (nullable, default: 'Aberta'::text)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))

// --- CONSTRAINTS ---
// Table: afastamentos
//   FOREIGN KEY afastamentos_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id) ON DELETE CASCADE
//   FOREIGN KEY afastamentos_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY afastamentos_pkey: PRIMARY KEY (id)
// Table: avaliacoes
//   FOREIGN KEY avaliacoes_avaliador_id_fkey: FOREIGN KEY (avaliador_id) REFERENCES colaboradores(id)
//   FOREIGN KEY avaliacoes_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id)
//   FOREIGN KEY avaliacoes_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY avaliacoes_pkey: PRIMARY KEY (id)
// Table: colaboradores
//   FOREIGN KEY colaboradores_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY colaboradores_pkey: PRIMARY KEY (id)
//   FOREIGN KEY colaboradores_supervisor_id_fkey: FOREIGN KEY (supervisor_id) REFERENCES colaboradores(id)
//   FOREIGN KEY colaboradores_tipo_jornada_id_fkey: FOREIGN KEY (tipo_jornada_id) REFERENCES tipos_jornada(id)
//   FOREIGN KEY colaboradores_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id)
//   CHECK valid_roles: CHECK ((role = ANY (ARRAY['Admin'::text, 'Gerente'::text, 'Colaborador'::text])))
// Table: escalas
//   UNIQUE escalas_colaborador_id_data_key: UNIQUE (colaborador_id, data)
//   FOREIGN KEY escalas_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id) ON DELETE CASCADE
//   FOREIGN KEY escalas_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY escalas_pkey: PRIMARY KEY (id)
// Table: escalas_semanais
//   UNIQUE escalas_semanais_colaborador_id_data_inicio_semana_key: UNIQUE (colaborador_id, data_inicio_semana)
//   FOREIGN KEY escalas_semanais_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id) ON DELETE CASCADE
//   FOREIGN KEY escalas_semanais_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY escalas_semanais_pkey: PRIMARY KEY (id)
// Table: ferias
//   FOREIGN KEY ferias_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id) ON DELETE CASCADE
//   FOREIGN KEY ferias_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY ferias_pkey: PRIMARY KEY (id)
// Table: funcoes
//   FOREIGN KEY funcoes_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY funcoes_pkey: PRIMARY KEY (id)
// Table: organizations
//   FOREIGN KEY organizations_created_by_fkey: FOREIGN KEY (created_by) REFERENCES auth.users(id)
//   PRIMARY KEY organizations_pkey: PRIMARY KEY (id)
// Table: ponto
//   FOREIGN KEY ponto_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id) ON DELETE CASCADE
//   FOREIGN KEY ponto_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY ponto_pkey: PRIMARY KEY (id)
// Table: profiles
//   FOREIGN KEY profiles_id_fkey: FOREIGN KEY (id) REFERENCES auth.users(id)
//   PRIMARY KEY profiles_pkey: PRIMARY KEY (id)
//   CHECK profiles_role_check: CHECK ((role = ANY (ARRAY['admin'::text, 'colaborador'::text, 'visitante'::text])))
// Table: recrutamento
//   FOREIGN KEY recrutamento_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY recrutamento_pkey: PRIMARY KEY (id)
//   FOREIGN KEY recrutamento_vaga_id_fkey: FOREIGN KEY (vaga_id) REFERENCES vagas(id)
// Table: setores
//   FOREIGN KEY setores_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY setores_pkey: PRIMARY KEY (id)
// Table: tipos_jornada
//   FOREIGN KEY tipos_jornada_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY tipos_jornada_pkey: PRIMARY KEY (id)
// Table: transactions
//   PRIMARY KEY transactions_pkey: PRIMARY KEY (id)
//   FOREIGN KEY transactions_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id)
// Table: turnos_padrao
//   UNIQUE turnos_padrao_codigo_key: UNIQUE (codigo)
//   FOREIGN KEY turnos_padrao_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY turnos_padrao_pkey: PRIMARY KEY (id)
// Table: vagas
//   FOREIGN KEY vagas_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY vagas_pkey: PRIMARY KEY (id)

// --- ROW LEVEL SECURITY POLICIES ---
// Table: afastamentos
//   Policy "Afastamentos isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
// Table: avaliacoes
//   Policy "Avaliacoes isolation" (ALL, PERMISSIVE) roles={public}
//     USING: ((organization_id = get_my_org_id()) OR (organization_id IS NULL))
// Table: colaboradores
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
//   Policy "Colaboradores isolation" (ALL, PERMISSIVE) roles={public}
//     USING: ((organization_id = get_my_org_id()) OR (user_id = auth.uid()))
// Table: escalas
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
//   Policy "Escalas isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())
// Table: escalas_semanais
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
//   Policy "Escalas semanais isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())
// Table: ferias
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
//   Policy "Ferias isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())
// Table: funcoes
//   Policy "funcoes_isolation" (ALL, PERMISSIVE) roles={public}
//     USING: ((organization_id = get_my_org_id()) OR (organization_id IS NULL))
// Table: organizations
//   Policy "Organizations insertable by auth users" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.role() = 'authenticated'::text)
//   Policy "Organizations viewable by members" (SELECT, PERMISSIVE) roles={public}
//     USING: ((id = get_my_org_id()) OR (created_by = auth.uid()))
// Table: ponto
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
//   Policy "Ponto isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())
// Table: profiles
//   Policy "Admins can update all profiles" (UPDATE, PERMISSIVE) roles={public}
//     USING: is_admin()
//   Policy "Admins can view all profiles" (SELECT, PERMISSIVE) roles={public}
//     USING: is_admin()
//   Policy "Users can insert their own profile" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() = id)
//   Policy "Users can update own profile" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() = id)
//   Policy "Users can update their own profile" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() = id)
//   Policy "Users can view own profile" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() = id)
//   Policy "Users can view their own profile" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() = id)
// Table: recrutamento
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
//   Policy "Recrutamento isolation" (ALL, PERMISSIVE) roles={public}
//     USING: ((organization_id = get_my_org_id()) OR (organization_id IS NULL))
// Table: setores
//   Policy "setores_isolation" (ALL, PERMISSIVE) roles={public}
//     USING: ((organization_id = get_my_org_id()) OR (organization_id IS NULL))
// Table: tipos_jornada
//   Policy "Allow authenticated read" (SELECT, PERMISSIVE) roles={authenticated}
//     USING: true
//   Policy "tipos_jornada_isolation" (ALL, PERMISSIVE) roles={public}
//     USING: ((organization_id = get_my_org_id()) OR (organization_id IS NULL))
// Table: transactions
//   Policy "Admins and users can insert transactions" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (is_admin() OR (auth.uid() = user_id))
//   Policy "Admins can delete all transactions" (DELETE, PERMISSIVE) roles={public}
//     USING: is_admin()
//   Policy "Admins can update all transactions" (UPDATE, PERMISSIVE) roles={public}
//     USING: is_admin()
//   Policy "Admins can view all transactions" (SELECT, PERMISSIVE) roles={public}
//     USING: is_admin()
//   Policy "Collaborators can view latest transaction" (SELECT, PERMISSIVE) roles={public}
//     USING: ((get_user_role() = 'colaborador'::text) AND (id = get_latest_transaction_id()))
//   Policy "Standard users can view own transactions" (SELECT, PERMISSIVE) roles={public}
//     USING: ((COALESCE(get_user_role(), 'visitante'::text) <> ALL (ARRAY['admin'::text, 'colaborador'::text])) AND (user_id = auth.uid()))
//   Policy "Users can delete own transactions" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
//   Policy "Users can delete their own transactions" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
//   Policy "Users can update own transactions" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
//   Policy "Users can update their own transactions" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: turnos_padrao
//   Policy "Allow authenticated read" (SELECT, PERMISSIVE) roles={authenticated}
//     USING: true
//   Policy "turnos_padrao_isolation" (ALL, PERMISSIVE) roles={public}
//     USING: ((organization_id = get_my_org_id()) OR (organization_id IS NULL))
// Table: vagas
//   Policy "Vagas isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())

// --- DATABASE FUNCTIONS ---
// FUNCTION atualiza_escala_semanal()
//   CREATE OR REPLACE FUNCTION public.atualiza_escala_semanal()
//    RETURNS trigger
//    LANGUAGE plpgsql
//   AS $function$
//   DECLARE
//       v_colaborador_id UUID;
//       v_data DATE;
//       v_data_inicio_semana DATE;
//       v_horas_realizadas NUMERIC := 0;
//       v_horas_previstas NUMERIC := 0;
//       v_saldo NUMERIC := 0;
//       v_org_id UUID;
//   BEGIN
//       IF TG_OP = 'DELETE' THEN
//           v_colaborador_id := OLD.colaborador_id;
//           v_data := OLD.data;
//           v_org_id := OLD.organization_id;
//       ELSE
//           v_colaborador_id := NEW.colaborador_id;
//           v_data := NEW.data;
//           v_org_id := NEW.organization_id;
//       END IF;
//
//       -- Get start of the week (Monday)
//       v_data_inicio_semana := date_trunc('week', v_data)::date;
//
//       -- Calculate horas_previstas from escalas
//       SELECT COALESCE(SUM(
//           CASE
//               WHEN tp.id IS NOT NULL AND tp.conta_hora = true THEN tp.carga_horaria
//               WHEN tp.id IS NULL AND UPPER(e.tipo) NOT IN ('FOLGA', 'FERIAS', 'FÉRIAS', 'ATESTADO', 'FERIADO', 'JUSTIFICADA', '0') THEN 8 -- fallback
//               ELSE 0
//           END
//       ), 0)
//       INTO v_horas_previstas
//       FROM public.escalas e
//       LEFT JOIN public.turnos_padrao tp ON UPPER(e.tipo) = UPPER(tp.codigo)
//       WHERE e.colaborador_id = v_colaborador_id
//         AND e.data >= v_data_inicio_semana
//         AND e.data < v_data_inicio_semana + INTERVAL '7 days';
//
//       -- Calculate horas_realizadas from ponto
//       SELECT COALESCE(SUM(
//           EXTRACT(EPOCH FROM (
//               CASE
//                   WHEN hora_saida IS NOT NULL AND hora_entrada IS NOT NULL
//                   THEN hora_saida::time - hora_entrada::time
//                   ELSE '00:00'::time - '00:00'::time
//               END
//           ))/3600
//       ), 0)
//       INTO v_horas_realizadas
//       FROM public.ponto p
//       WHERE p.colaborador_id = v_colaborador_id
//         AND p.data >= v_data_inicio_semana
//         AND p.data < v_data_inicio_semana + INTERVAL '7 days';
//
//       v_saldo := v_horas_realizadas - v_horas_previstas;
//
//       -- Upsert into escalas_semanais
//       INSERT INTO public.escalas_semanais (
//           colaborador_id,
//           data_inicio_semana,
//           organization_id,
//           horas_semana,
//           horas_previstas,
//           horas_realizadas,
//           saldo_horas
//       )
//       VALUES (
//           v_colaborador_id,
//           v_data_inicio_semana,
//           v_org_id,
//           v_horas_previstas,
//           v_horas_previstas,
//           v_horas_realizadas,
//           v_saldo
//       )
//       ON CONFLICT (colaborador_id, data_inicio_semana)
//       DO UPDATE SET
//           horas_semana = EXCLUDED.horas_previstas,
//           horas_previstas = EXCLUDED.horas_previstas,
//           horas_realizadas = EXCLUDED.horas_realizadas,
//           saldo_horas = EXCLUDED.saldo_horas;
//
//       IF TG_OP = 'DELETE' THEN
//           RETURN OLD;
//       END IF;
//       RETURN NEW;
//   END;
//   $function$
//
// FUNCTION auto_assign_org_id()
//   CREATE OR REPLACE FUNCTION public.auto_assign_org_id()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   BEGIN
//       IF NEW.organization_id IS NULL THEN
//           NEW.organization_id := public.get_my_org_id();
//       END IF;
//       RETURN NEW;
//   END;
//   $function$
//
// FUNCTION get_dashboard_kpi(date)
//   CREATE OR REPLACE FUNCTION public.get_dashboard_kpi(p_date_now date)
//    RETURNS json
//    LANGUAGE plpgsql
//   AS $function$
//   DECLARE
//     v_total_balance NUMERIC;
//     v_month_income NUMERIC;
//     v_month_expense NUMERIC;
//     v_last_month_income NUMERIC;
//     v_last_month_expense NUMERIC;
//     v_start_month DATE;
//     v_end_month DATE;
//     v_start_last_month DATE;
//     v_end_last_month DATE;
//   BEGIN
//     v_start_month := date_trunc('month', p_date_now);
//     v_end_month := (date_trunc('month', p_date_now) + interval '1 month' - interval '1 day')::date;
//     v_start_last_month := date_trunc('month', p_date_now - interval '1 month');
//     v_end_last_month := (date_trunc('month', p_date_now) - interval '1 day')::date;
//
//     -- Calculate Total Balance (All time based on visibility)
//     SELECT COALESCE(SUM(CASE WHEN type = 'Receita' THEN amount ELSE -amount END), 0)
//     INTO v_total_balance
//     FROM public.transactions;
//
//     -- Calculate Month Income
//     SELECT COALESCE(SUM(amount), 0)
//     INTO v_month_income
//     FROM public.transactions
//     WHERE type = 'Receita' AND date >= v_start_month AND date <= v_end_month;
//
//     -- Calculate Month Expense
//     SELECT COALESCE(SUM(amount), 0)
//     INTO v_month_expense
//     FROM public.transactions
//     WHERE type = 'Despesa' AND date >= v_start_month AND date <= v_end_month;
//
//     -- Calculate Last Month Income
//     SELECT COALESCE(SUM(amount), 0)
//     INTO v_last_month_income
//     FROM public.transactions
//     WHERE type = 'Receita' AND date >= v_start_last_month AND date <= v_end_last_month;
//
//     -- Calculate Last Month Expense
//     SELECT COALESCE(SUM(amount), 0)
//     INTO v_last_month_expense
//     FROM public.transactions
//     WHERE type = 'Despesa' AND date >= v_start_last_month AND date <= v_end_last_month;
//
//     RETURN json_build_object(
//       'totalBalance', v_total_balance,
//       'monthIncome', v_month_income,
//       'monthExpense', v_month_expense,
//       'lastMonthIncome', v_last_month_income,
//       'lastMonthExpense', v_last_month_expense
//     );
//   END;
//   $function$
//
// FUNCTION get_latest_transaction_id()
//   CREATE OR REPLACE FUNCTION public.get_latest_transaction_id()
//    RETURNS uuid
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   BEGIN
//     -- Deterministic sort order matching the service layer
//     RETURN (SELECT id FROM public.transactions ORDER BY created_at DESC, id DESC LIMIT 1);
//   END;
//   $function$
//
// FUNCTION get_my_org_id()
//   CREATE OR REPLACE FUNCTION public.get_my_org_id()
//    RETURNS uuid
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   DECLARE
//     org_id UUID;
//   BEGIN
//     SELECT organization_id INTO org_id FROM public.colaboradores WHERE user_id = auth.uid() LIMIT 1;
//     RETURN org_id;
//   EXCEPTION WHEN OTHERS THEN
//     RETURN NULL;
//   END;
//   $function$
//
// FUNCTION get_user_role()
//   CREATE OR REPLACE FUNCTION public.get_user_role()
//    RETURNS text
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   BEGIN
//     RETURN (SELECT role FROM public.profiles WHERE id = auth.uid());
//   END;
//   $function$
//
// FUNCTION handle_new_user()
//   CREATE OR REPLACE FUNCTION public.handle_new_user()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   BEGIN
//     INSERT INTO public.profiles (id, full_name, role)
//     VALUES (
//       new.id,
//       new.raw_user_meta_data->>'full_name',
//       'visitante'
//     )
//     ON CONFLICT (id) DO NOTHING;
//     RETURN new;
//   END;
//   $function$
//
// FUNCTION is_admin()
//   CREATE OR REPLACE FUNCTION public.is_admin()
//    RETURNS boolean
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   BEGIN
//     RETURN EXISTS (
//       SELECT 1 FROM public.profiles
//       WHERE id = auth.uid() AND role = 'admin'
//     );
//   END;
//   $function$
//
// FUNCTION tr_ponto_atualiza_escala_semanal()
//   CREATE OR REPLACE FUNCTION public.tr_ponto_atualiza_escala_semanal()
//    RETURNS trigger
//    LANGUAGE plpgsql
//   AS $function$
//   DECLARE
//       v_data_inicio_semana DATE;
//       v_horas_realizadas NUMERIC := 0;
//       v_horas_previstas NUMERIC := 0;
//       v_colaborador_id UUID;
//       v_org_id UUID;
//   BEGIN
//       IF TG_OP = 'DELETE' THEN
//           v_colaborador_id := OLD.colaborador_id;
//           v_data_inicio_semana := date_trunc('week', OLD.data)::date;
//           v_org_id := OLD.organization_id;
//       ELSE
//           v_colaborador_id := NEW.colaborador_id;
//           v_data_inicio_semana := date_trunc('week', NEW.data)::date;
//           v_org_id := NEW.organization_id;
//       END IF;
//
//       SELECT COALESCE(SUM(
//           CASE
//               WHEN tp.id IS NOT NULL AND tp.conta_hora = true THEN tp.carga_horaria
//               WHEN tp.id IS NULL AND UPPER(e.tipo) NOT IN ('FOLGA', 'FERIAS', 'FÉRIAS', 'ATESTADO', 'FERIADO', 'JUSTIFICADA', '0') THEN 8 -- fallback
//               ELSE 0
//           END
//       ), 0)
//       INTO v_horas_previstas
//       FROM public.escalas e
//       LEFT JOIN public.turnos_padrao tp ON UPPER(e.tipo) = UPPER(tp.codigo)
//       WHERE e.colaborador_id = v_colaborador_id
//         AND e.data >= v_data_inicio_semana
//         AND e.data < v_data_inicio_semana + INTERVAL '7 days';
//
//       SELECT COALESCE(SUM(
//           EXTRACT(EPOCH FROM (
//               CASE
//                   WHEN hora_saida IS NOT NULL AND hora_entrada IS NOT NULL
//                   THEN hora_saida::time - hora_entrada::time
//                   ELSE '00:00'::time - '00:00'::time
//               END
//           ))/3600
//       ), 0)
//       INTO v_horas_realizadas
//       FROM public.ponto p
//       WHERE p.colaborador_id = v_colaborador_id
//         AND p.data >= v_data_inicio_semana
//         AND p.data < v_data_inicio_semana + INTERVAL '7 days';
//
//       INSERT INTO public.escalas_semanais (
//           colaborador_id, data_inicio_semana, organization_id,
//           horas_semana, horas_previstas, horas_realizadas, saldo_horas
//       )
//       VALUES (
//           v_colaborador_id, v_data_inicio_semana, v_org_id,
//           v_horas_previstas, v_horas_previstas, v_horas_realizadas, v_horas_realizadas - v_horas_previstas
//       )
//       ON CONFLICT (colaborador_id, data_inicio_semana)
//       DO UPDATE SET
//           horas_semana = EXCLUDED.horas_previstas,
//           horas_previstas = EXCLUDED.horas_previstas,
//           horas_realizadas = EXCLUDED.horas_realizadas,
//           saldo_horas = EXCLUDED.saldo_horas;
//
//       IF TG_OP = 'DELETE' THEN RETURN OLD; END IF;
//       RETURN NEW;
//   END;
//   $function$
//
// FUNCTION valida_escala()
//   CREATE OR REPLACE FUNCTION public.valida_escala()
//    RETURNS trigger
//    LANGUAGE plpgsql
//   AS $function$
//   DECLARE
//       v_status_operacional TEXT;
//       v_descanso_interjornada_horas NUMERIC;
//       v_escala_anterior RECORD;
//       v_conflito_ferias BOOLEAN;
//       v_conflito_afastamento BOOLEAN;
//   BEGIN
//       IF TG_OP = 'DELETE' THEN
//           RETURN OLD;
//       END IF;
//
//       -- Check colaborador status
//       SELECT status_operacional, descanso_interjornada_horas
//       INTO v_status_operacional, v_descanso_interjornada_horas
//       FROM public.colaboradores
//       WHERE id = NEW.colaborador_id;
//
//       IF v_status_operacional IN ('Desligado', 'Inativo') THEN
//           RAISE EXCEPTION 'Colaborador indisponível para escala (Status: %)', v_status_operacional;
//       END IF;
//
//       -- Check Férias
//       SELECT EXISTS (
//           SELECT 1 FROM public.ferias
//           WHERE colaborador_id = NEW.colaborador_id
//             AND status = 'Aprovada'
//             AND NEW.data BETWEEN data_inicio AND data_fim
//       ) INTO v_conflito_ferias;
//
//       IF v_conflito_ferias THEN
//           RAISE EXCEPTION 'Colaborador está em férias no período';
//       END IF;
//
//       -- Check Afastamentos
//       SELECT EXISTS (
//           SELECT 1 FROM public.afastamentos
//           WHERE colaborador_id = NEW.colaborador_id
//             AND status = 'Aprovado'
//             AND NEW.data BETWEEN data_inicio AND data_fim
//       ) INTO v_conflito_afastamento;
//
//       IF v_conflito_afastamento THEN
//           RAISE EXCEPTION 'Colaborador está afastado no período';
//       END IF;
//
//       -- Basic Interjornada check
//       IF v_descanso_interjornada_horas IS NOT NULL AND v_descanso_interjornada_horas > 0 THEN
//           SELECT e.*, tp.bloqueia_dia_seguinte, tp.carga_horaria
//           INTO v_escala_anterior
//           FROM public.escalas e
//           LEFT JOIN public.turnos_padrao tp ON UPPER(e.tipo) = UPPER(tp.codigo)
//           WHERE e.colaborador_id = NEW.colaborador_id
//             AND e.data = NEW.data - INTERVAL '1 day'
//             AND tp.bloqueia_dia_seguinte = true;
//
//           IF FOUND AND UPPER(NEW.tipo) NOT IN ('FOLGA', 'FÉRIAS', 'FERIAS', 'ATESTADO', '0') THEN
//                RAISE EXCEPTION 'Descanso obrigatório não cumprido. Colaborador teve turno que bloqueia o dia seguinte ontem.';
//           END IF;
//       END IF;
//
//       RETURN NEW;
//   END;
//   $function$
//

// --- TRIGGERS ---
// Table: avaliacoes
//   tr_assign_org_avaliacoes: CREATE TRIGGER tr_assign_org_avaliacoes BEFORE INSERT ON public.avaliacoes FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: colaboradores
//   tr_assign_org_colaboradores: CREATE TRIGGER tr_assign_org_colaboradores BEFORE INSERT ON public.colaboradores FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: escalas
//   tr_assign_org_escalas: CREATE TRIGGER tr_assign_org_escalas BEFORE INSERT ON public.escalas FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
//   tr_atualiza_escala_semanal_del: CREATE TRIGGER tr_atualiza_escala_semanal_del AFTER DELETE ON public.escalas FOR EACH ROW EXECUTE FUNCTION atualiza_escala_semanal()
//   tr_atualiza_escala_semanal_ins_upd: CREATE TRIGGER tr_atualiza_escala_semanal_ins_upd AFTER INSERT OR UPDATE ON public.escalas FOR EACH ROW EXECUTE FUNCTION atualiza_escala_semanal()
//   tr_valida_escala: CREATE TRIGGER tr_valida_escala BEFORE INSERT OR UPDATE ON public.escalas FOR EACH ROW EXECUTE FUNCTION valida_escala()
// Table: escalas_semanais
//   tr_assign_org_escalas_semanais: CREATE TRIGGER tr_assign_org_escalas_semanais BEFORE INSERT ON public.escalas_semanais FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: ferias
//   tr_assign_org_ferias: CREATE TRIGGER tr_assign_org_ferias BEFORE INSERT ON public.ferias FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: ponto
//   tr_assign_org_ponto: CREATE TRIGGER tr_assign_org_ponto BEFORE INSERT ON public.ponto FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
//   tr_ponto_atualiza_escala_semanal_trigger: CREATE TRIGGER tr_ponto_atualiza_escala_semanal_trigger AFTER INSERT OR DELETE OR UPDATE ON public.ponto FOR EACH ROW EXECUTE FUNCTION tr_ponto_atualiza_escala_semanal()
// Table: recrutamento
//   tr_assign_org_recrutamento: CREATE TRIGGER tr_assign_org_recrutamento BEFORE INSERT ON public.recrutamento FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: vagas
//   tr_assign_org_vagas: CREATE TRIGGER tr_assign_org_vagas BEFORE INSERT ON public.vagas FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()

// --- INDEXES ---
// Table: colaboradores
//   CREATE INDEX idx_colaboradores_user_id ON public.colaboradores USING btree (user_id)
// Table: escalas
//   CREATE UNIQUE INDEX escalas_colaborador_id_data_key ON public.escalas USING btree (colaborador_id, data)
// Table: escalas_semanais
//   CREATE UNIQUE INDEX escalas_semanais_colaborador_id_data_inicio_semana_key ON public.escalas_semanais USING btree (colaborador_id, data_inicio_semana)
// Table: transactions
//   CREATE INDEX transactions_created_at_idx ON public.transactions USING btree (created_at DESC)
// Table: turnos_padrao
//   CREATE UNIQUE INDEX turnos_padrao_codigo_key ON public.turnos_padrao USING btree (codigo)
