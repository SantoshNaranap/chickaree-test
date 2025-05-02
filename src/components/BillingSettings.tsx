
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, CreditCard } from 'lucide-react';

const PricingCard = ({
  title,
  price,
  description,
  features,
  isActive = false,
  isPro = false
}: {
  title: string,
  price: string,
  description: string,
  features: string[],
  isActive?: boolean,
  isPro?: boolean
}) => {
  return (
    <Card className={`border ${isActive 
      ? 'border-oralia-light-purple bg-oralia-dark-gray' 
      : 'border-oralia-light-gray bg-oralia-dark-gray'}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="mt-1 flex items-baseline gap-x-1">
              <span className="text-2xl font-bold tracking-tight">{price}</span>
              <span className="text-sm text-oralia-text-gray">/month</span>
            </div>
          </div>
          {isActive && (
            <Badge variant="outline" className="border-oralia-light-purple text-oralia-light-purple">
              Current Plan
            </Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-oralia-green shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${isPro 
            ? 'bg-oralia-light-purple hover:bg-oralia-purple' 
            : 'bg-oralia-light-gray hover:bg-oralia-light-gray/90'}`}
        >
          {isActive ? 'Current Plan' : 'Upgrade'}
        </Button>
      </CardFooter>
    </Card>
  );
};

const BillingSettings = () => {
  return (
    <div className="w-full max-w-4xl p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Billing</h2>
        <p className="text-oralia-text-gray">Manage your subscription and billing information</p>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-medium mb-4">Current Payment Method</h3>
        <div className="flex items-center gap-4 p-4 border border-oralia-light-gray rounded-md bg-oralia-dark-gray">
          <CreditCard className="h-10 w-10 text-oralia-text-gray" />
          <div>
            <p className="font-medium">Visa ending in 4242</p>
            <p className="text-sm text-oralia-text-gray">Expires 12/2024</p>
          </div>
          <Button variant="outline" className="ml-auto">Update</Button>
        </div>
      </div>

      <h3 className="text-lg font-medium mb-4">Plans</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <PricingCard
          title="Basic"
          price="$0"
          description="For individuals getting started with AI"
          features={[
            "5,000 messages per month",
            "2 projects",
            "Default models only",
            "Community support"
          ]}
          isActive={true}
        />
        
        <PricingCard
          title="Pro"
          price="$49"
          description="For professional use with advanced features"
          features={[
            "Unlimited messages",
            "Unlimited projects",
            "All available models",
            "Priority support",
            "Custom domain"
          ]}
          isPro={true}
        />
      </div>
    </div>
  );
};

export default BillingSettings;
