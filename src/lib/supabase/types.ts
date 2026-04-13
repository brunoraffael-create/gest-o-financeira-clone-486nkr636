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
      avaliacoes: {
        Row: {
          colaborador_id: string | null
          comentarios: string | null
          created_at: string
          data_avaliacao: string
          id: string
          nota: number | null
          organization_id: string | null
        }
        Insert: {
          colaborador_id?: string | null
          comentarios?: string | null
          created_at?: string
          data_avaliacao: string
          id?: string
          nota?: number | null
          organization_id?: string | null
        }
        Update: {
          colaborador_id?: string | null
          comentarios?: string | null
          created_at?: string
          data_avaliacao?: string
          id?: string
          nota?: number | null
          organization_id?: string | null
        }
        Relationships: [
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
          carga_horaria_semanal: number | null
          cargo: string | null
          cidade_lotacao: string | null
          cpf: string | null
          created_at: string
          data_admissao: string | null
          data_desligamento: string | null
          data_nascimento: string | null
          departamento: string | null
          dias_trabalhados: string | null
          documentos_urls: Json | null
          email: string | null
          email_corporativo: string | null
          endereco: string | null
          fim_almoco: string | null
          gympass: boolean | null
          horario_almoco: string | null
          horario_entrada: string | null
          horario_saida: string | null
          id: string
          image_gender: string | null
          inicio_almoco: string | null
          matricula: string | null
          nome: string
          organization_id: string | null
          plano_odontologico: boolean | null
          plano_saude: boolean | null
          quantidade_dependentes: number | null
          rg: string | null
          role: string
          salario: number | null
          salario_familia: boolean | null
          seguro_vida: boolean | null
          status: string | null
          telefone: string | null
          tipo_contrato: string | null
          tipo_rescisao: string | null
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
          carga_horaria_semanal?: number | null
          cargo?: string | null
          cidade_lotacao?: string | null
          cpf?: string | null
          created_at?: string
          data_admissao?: string | null
          data_desligamento?: string | null
          data_nascimento?: string | null
          departamento?: string | null
          dias_trabalhados?: string | null
          documentos_urls?: Json | null
          email?: string | null
          email_corporativo?: string | null
          endereco?: string | null
          fim_almoco?: string | null
          gympass?: boolean | null
          horario_almoco?: string | null
          horario_entrada?: string | null
          horario_saida?: string | null
          id?: string
          image_gender?: string | null
          inicio_almoco?: string | null
          matricula?: string | null
          nome: string
          organization_id?: string | null
          plano_odontologico?: boolean | null
          plano_saude?: boolean | null
          quantidade_dependentes?: number | null
          rg?: string | null
          role?: string
          salario?: number | null
          salario_familia?: boolean | null
          seguro_vida?: boolean | null
          status?: string | null
          telefone?: string | null
          tipo_contrato?: string | null
          tipo_rescisao?: string | null
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
          carga_horaria_semanal?: number | null
          cargo?: string | null
          cidade_lotacao?: string | null
          cpf?: string | null
          created_at?: string
          data_admissao?: string | null
          data_desligamento?: string | null
          data_nascimento?: string | null
          departamento?: string | null
          dias_trabalhados?: string | null
          documentos_urls?: Json | null
          email?: string | null
          email_corporativo?: string | null
          endereco?: string | null
          fim_almoco?: string | null
          gympass?: boolean | null
          horario_almoco?: string | null
          horario_entrada?: string | null
          horario_saida?: string | null
          id?: string
          image_gender?: string | null
          inicio_almoco?: string | null
          matricula?: string | null
          nome?: string
          organization_id?: string | null
          plano_odontologico?: boolean | null
          plano_saude?: boolean | null
          quantidade_dependentes?: number | null
          rg?: string | null
          role?: string
          salario?: number | null
          salario_familia?: boolean | null
          seguro_vida?: boolean | null
          status?: string | null
          telefone?: string | null
          tipo_contrato?: string | null
          tipo_rescisao?: string | null
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
          horas_semana: number | null
          id: string
          observacao: string | null
          organization_id: string | null
          status: string | null
          troca_reposicao: string | null
        }
        Insert: {
          colaborador_id?: string | null
          created_at?: string
          data_inicio_semana: string
          horas_semana?: number | null
          id?: string
          observacao?: string | null
          organization_id?: string | null
          status?: string | null
          troca_reposicao?: string | null
        }
        Update: {
          colaborador_id?: string | null
          created_at?: string
          data_inicio_semana?: string
          horas_semana?: number | null
          id?: string
          observacao?: string | null
          organization_id?: string | null
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
      recrutamento: {
        Row: {
          created_at: string
          id: string
          image_gender: string | null
          nome_candidato: string
          organization_id: string | null
          status: string
          vaga: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_gender?: string | null
          nome_candidato: string
          organization_id?: string | null
          status: string
          vaga: string
        }
        Update: {
          created_at?: string
          id?: string
          image_gender?: string | null
          nome_candidato?: string
          organization_id?: string | null
          status?: string
          vaga?: string
        }
        Relationships: [
          {
            foreignKeyName: 'recrutamento_organization_id_fkey'
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
      get_my_org_id: { Args: never; Returns: string }
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
// Table: avaliacoes
//   id: uuid (not null, default: gen_random_uuid())
//   organization_id: uuid (nullable)
//   colaborador_id: uuid (nullable)
//   data_avaliacao: date (not null)
//   nota: numeric (nullable)
//   comentarios: text (nullable)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
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
// Table: ferias
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   colaborador_id: uuid (nullable)
//   data_inicio: date (not null)
//   data_fim: date (not null)
//   status: text (nullable, default: 'Pendente'::text)
//   organization_id: uuid (nullable)
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
// Table: recrutamento
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   nome_candidato: text (not null)
//   vaga: text (not null)
//   status: text (not null)
//   image_gender: text (nullable, default: 'male'::text)
//   organization_id: uuid (nullable)
// Table: vagas
//   id: uuid (not null, default: gen_random_uuid())
//   organization_id: uuid (nullable)
//   titulo: text (not null)
//   descricao: text (nullable)
//   status: text (nullable, default: 'Aberta'::text)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))

// --- CONSTRAINTS ---
// Table: avaliacoes
//   FOREIGN KEY avaliacoes_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id)
//   FOREIGN KEY avaliacoes_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY avaliacoes_pkey: PRIMARY KEY (id)
// Table: colaboradores
//   FOREIGN KEY colaboradores_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY colaboradores_pkey: PRIMARY KEY (id)
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
// Table: organizations
//   FOREIGN KEY organizations_created_by_fkey: FOREIGN KEY (created_by) REFERENCES auth.users(id)
//   PRIMARY KEY organizations_pkey: PRIMARY KEY (id)
// Table: ponto
//   FOREIGN KEY ponto_colaborador_id_fkey: FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id) ON DELETE CASCADE
//   FOREIGN KEY ponto_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY ponto_pkey: PRIMARY KEY (id)
// Table: recrutamento
//   FOREIGN KEY recrutamento_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY recrutamento_pkey: PRIMARY KEY (id)
// Table: vagas
//   FOREIGN KEY vagas_organization_id_fkey: FOREIGN KEY (organization_id) REFERENCES organizations(id)
//   PRIMARY KEY vagas_pkey: PRIMARY KEY (id)

// --- ROW LEVEL SECURITY POLICIES ---
// Table: avaliacoes
//   Policy "Avaliacoes isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())
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
// Table: recrutamento
//   Policy "Allow all access to authenticated users" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
//   Policy "Recrutamento isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())
// Table: vagas
//   Policy "Vagas isolation" (ALL, PERMISSIVE) roles={public}
//     USING: (organization_id = get_my_org_id())

// --- DATABASE FUNCTIONS ---
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

// --- TRIGGERS ---
// Table: avaliacoes
//   tr_assign_org_avaliacoes: CREATE TRIGGER tr_assign_org_avaliacoes BEFORE INSERT ON public.avaliacoes FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: colaboradores
//   tr_assign_org_colaboradores: CREATE TRIGGER tr_assign_org_colaboradores BEFORE INSERT ON public.colaboradores FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: escalas
//   tr_assign_org_escalas: CREATE TRIGGER tr_assign_org_escalas BEFORE INSERT ON public.escalas FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: escalas_semanais
//   tr_assign_org_escalas_semanais: CREATE TRIGGER tr_assign_org_escalas_semanais BEFORE INSERT ON public.escalas_semanais FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: ferias
//   tr_assign_org_ferias: CREATE TRIGGER tr_assign_org_ferias BEFORE INSERT ON public.ferias FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
// Table: ponto
//   tr_assign_org_ponto: CREATE TRIGGER tr_assign_org_ponto BEFORE INSERT ON public.ponto FOR EACH ROW EXECUTE FUNCTION auto_assign_org_id()
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
