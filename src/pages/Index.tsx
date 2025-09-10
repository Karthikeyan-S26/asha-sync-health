import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MapPin, Droplets, Users, AlertTriangle, Camera, FileText, Activity } from "lucide-react";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  // Mock data for demonstration
  const alerts = [
    { id: 1, village: "Tezpur Village", risk: "High", cases: 12, type: "Cholera outbreak suspected" },
    { id: 2, village: "Jorhat District", risk: "Medium", cases: 5, type: "Water contamination detected" },
    { id: 3, village: "Dibrugarh Area", risk: "Low", cases: 2, type: "Routine monitoring" }
  ];

  const waterQuality = [
    { location: "Tezpur Village", ph: 5.2, turbidity: 45, status: "Contaminated", ecoli: true },
    { location: "Jorhat District", ph: 7.1, turbidity: 12, status: "Safe", ecoli: false },
    { location: "Dibrugarh Area", ph: 6.8, turbidity: 8, status: "Safe", ecoli: false }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Smart Health Monitoring System
          </h1>
          <p className="text-muted-foreground text-lg">
            Early Warning System for Water-borne Disease Prevention • Northeast India
          </p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Report Symptoms
            </TabsTrigger>
            <TabsTrigger value="water" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Water Test
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Map View
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">19</div>
                  <p className="text-xs text-muted-foreground">+3 from yesterday</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Villages Monitored</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">Across NE India</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Water Tests</CardTitle>
                  <Droplets className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Risk Alerts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Requires attention</p>
                </CardContent>
              </Card>
            </div>

            {/* Alerts Section */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Active Alerts</CardTitle>
                  <CardDescription>Disease outbreak warnings and risk assessments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.map((alert) => (
                      <Alert key={alert.id} className={`border-l-4 ${
                        alert.risk === 'High' ? 'border-l-red-500' : 
                        alert.risk === 'Medium' ? 'border-l-yellow-500' : 
                        'border-l-green-500'
                      }`}>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle className="flex items-center justify-between">
                          {alert.village}
                          <Badge variant={
                            alert.risk === 'High' ? 'destructive' : 
                            alert.risk === 'Medium' ? 'secondary' : 
                            'default'
                          }>
                            {alert.risk} Risk
                          </Badge>
                        </AlertTitle>
                        <AlertDescription>
                          {alert.type} • {alert.cases} cases reported
                        </AlertDescription>
                      </Alert>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Water Quality Status</CardTitle>
                  <CardDescription>Real-time water testing results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {waterQuality.map((test, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{test.location}</p>
                          <p className="text-sm text-muted-foreground">
                            pH: {test.ph} • Turbidity: {test.turbidity} NTU
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant={test.status === 'Safe' ? 'default' : 'destructive'}>
                            {test.status}
                          </Badge>
                          {test.ecoli && (
                            <p className="text-xs text-red-600 mt-1">E. coli detected</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tabs content placeholders */}
          <TabsContent value="symptoms" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Report Health Symptoms</CardTitle>
                <CardDescription>ASHA workers and community members can report symptoms here</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Symptom reporting form will be implemented here.</p>
                <Button className="mt-4">Start Symptom Report</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="water" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Water Quality Test</CardTitle>
                <CardDescription>Upload water test strip photos for AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Photo upload and AI analysis interface will be implemented here.</p>
                <Button className="mt-4">Upload Test Strip Photo</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Geographic Risk Map</CardTitle>
                <CardDescription>Visual map showing risk zones across Northeast India</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Interactive GIS map will be implemented here.</p>
                <Button className="mt-4">View Full Map</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
