import Stripe from "stripe";
import { createClient} from '@supabase/supabase-js'

import { Database } from "@/types_db";
import {Price, Product } from '@/types'

import {stripe} from './stripe'
import { toDateTime } from "./helpers";

export const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASEURL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

