export type Plan = {
  id: number;
  name: string;
  slug: string;
  description: string;
  original_price: string;
  discount_price: string;
  invoice_period: number;
  invoice_interval: string;
  trial_period: number;
  trial_interval: string;
  paddle_price_id: string;
  is_best_deal: boolean;
  created_at: string;
};

export type PurchasedPlan = {
  id: number;
  plan: Plan;
  plan_id: number;
  amount_paid: string;
  start_date: string;
  end_date: string;
  status: "active" | "cancelled" | "expired";
};

export type PlansState = {
  isPlansLoadedOnce: boolean;
  plans: Plan[];
  isActivePlanLoadedOnce: boolean;
  activePlan: PurchasedPlan | null;
};
