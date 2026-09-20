export const mockMerchant = {
  id: 'merchant_001',
  name: 'TechGear Electronics Store',
  logo: '🏪',
  objectives: [
    { id: 'obj_1', title: 'Increase Repeat Purchases', description: 'Encourage customers to return within 30 days', priority: 'high' },
    { id: 'obj_2', title: 'Clear Inventory', description: 'Move seasonal electronics stock', priority: 'high' },
    { id: 'obj_3', title: 'Drive Traffic', description: 'Increase foot traffic during off-peak hours (2PM-5PM)', priority: 'medium' }
  ]
}

export const mockOffers = [
  {
    id: 'offer_001',
    title: '20% Cashback on Electronics',
    objective: 'increase_repeat_purchases',
    reason: 'Based on member purchase history showing high engagement with electronics. This offer targets frequent buyers who are likely to return.',
    estimatedImpact: {
      metric: 'Expected 18% increase in repeat visits within 30 days',
      confidence: '89%'
    },
    linkedTemplate: {
      id: 'template_cashback_electronics',
      name: 'Amex Merchant Template: Tiered Cashback'
    },
    linkedBenefit: {
      id: 'benefit_rewards_elite',
      name: 'Elite Member Exclusive Reward'
    },
    status: 'pending',
    offerDetails: {
      discount: '20%',
      category: 'Electronics',
      validUntil: '30 days'
    }
  },
  {
    id: 'offer_002',
    title: 'Flash Sale: 30% Off Clearance Items',
    objective: 'clear_inventory',
    reason: 'AI analysis shows this segment has low-engagement inventory. Flash sale format creates urgency and targets price-sensitive members.',
    estimatedImpact: {
      metric: 'Expected 25% increase in clearance item sales',
      confidence: '78%'
    },
    linkedTemplate: {
      id: 'template_flash_sale',
      name: 'Amex Merchant Template: Time-Limited Flash Sale'
    },
    linkedBenefit: {
      id: 'benefit_savings_pro',
      name: 'Savings Pro Member Benefit'
    },
    status: 'pending',
    offerDetails: {
      discount: '30%',
      category: 'Clearance Items',
      validUntil: '5 days'
    }
  },
  {
    id: 'offer_003',
    title: 'Happy Hour Special: $10 Off (2PM-5PM)',
    objective: 'drive_traffic',
    reason: 'Targeted time-based offer to drive traffic during typically slow afternoon hours. This demographic shows high conversion during midday shopping.',
    estimatedImpact: {
      metric: 'Expected 35% increase in 2PM-5PM traffic',
      confidence: '85%'
    },
    linkedTemplate: {
      id: 'template_time_based',
      name: 'Amex Merchant Template: Time-Based Offer'
    },
    linkedBenefit: {
      id: 'benefit_timely_deals',
      name: 'Timely Deals Member Benefit'
    },
    status: 'pending',
    offerDetails: {
      discount: '$10 off $50+',
      validTime: '2:00 PM - 5:00 PM',
      validUntil: '60 days'
    }
  },
  {
    id: 'offer_004',
    title: 'Referral Bonus: $25 Credit',
    objective: 'increase_repeat_purchases',
    reason: 'Members who refer friends show 3x higher lifetime value. This offer leverages social networks to drive both new customers and repeat engagement.',
    estimatedImpact: {
      metric: 'Expected 40% increase in referred customer acquisition',
      confidence: '72%'
    },
    linkedTemplate: {
      id: 'template_referral',
      name: 'Amex Merchant Template: Referral Program'
    },
    linkedBenefit: {
      id: 'benefit_network_rewards',
      name: 'Network Rewards Member Benefit'
    },
    status: 'pending',
    offerDetails: {
      reward: '$25 credit per referral',
      maxRewards: 'Unlimited',
      validUntil: '90 days'
    }
  },
  {
    id: 'offer_005',
    title: '5x Points on Bundle Purchases',
    objective: 'increase_repeat_purchases',
    reason: 'Bundle purchases indicate high-intent customers. Multiplier rewards incentivize larger basket sizes and increase average order value.',
    estimatedImpact: {
      metric: 'Expected 22% increase in average order value',
      confidence: '81%'
    },
    linkedTemplate: {
      id: 'template_points_multiplier',
      name: 'Amex Merchant Template: Points Multiplier'
    },
    linkedBenefit: {
      id: 'benefit_premium_rewards',
      name: 'Premium Member Rewards Program'
    },
    status: 'pending',
    offerDetails: {
      points: '5x points',
      applicableTo: 'Bundle purchases (2+ items)',
      validUntil: '45 days'
    }
  }
]
