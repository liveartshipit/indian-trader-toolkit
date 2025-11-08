import { SettingsIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function Settings() {
  return (
    <div className="min-h-full bg-neutral">
      <div className="bg-gradient-2 text-primary-foreground py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="w-8 h-8" strokeWidth={2} />
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground">
              Settings
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90">
            Customize your toolkit experience
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Preferences</CardTitle>
            <CardDescription className="text-muted-foreground">
              Manage your application preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="notifications" className="text-foreground">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about new tools and features
                </p>
              </div>
              <Switch id="notifications" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="analytics" className="text-foreground">
                  Usage Analytics
                </Label>
                <p className="text-sm text-muted-foreground">
                  Help us improve by sharing anonymous usage data
                </p>
              </div>
              <Switch id="analytics" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="auto-save" className="text-foreground">
                  Auto-save Favorites
                </Label>
                <p className="text-sm text-muted-foreground">
                  Automatically save tools you interact with frequently
                </p>
              </div>
              <Switch id="auto-save" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
