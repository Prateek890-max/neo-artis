import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Award, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";
import timetableIcon from "@/assets/timetable-icon.jpg";
import creditsIcon from "@/assets/credits-icon.jpg";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "12,458",
      change: "+12.3%",
      icon: Users,
      color: "text-student-primary",
    },
    {
      title: "Active Courses",
      value: "347",
      change: "+5.2%",
      icon: BookOpen,
      color: "text-brand-green",
    },
    {
      title: "Generated Timetables",
      value: "89",
      change: "+23.1%",
      icon: Calendar,
      color: "text-admin-primary",
    },
    {
      title: "Credits Awarded",
      value: "45,267",
      change: "+18.7%",
      icon: Award,
      color: "text-faculty-primary",
    },
  ];

  const quickActions = [
    {
      title: "Generate Timetable",
      description: "Create AI-powered conflict-free schedules",
      icon: Calendar,
      color: "bg-gradient-admin",
      link: "/timetable",
      image: timetableIcon,
    },
    {
      title: "Manage Credits",
      description: "Academic Bank of Credits (ABC) management",
      icon: Award,
      color: "bg-gradient-student",
      link: "/credits",
      image: creditsIcon,
    },
    {
      title: "Course Catalog",
      description: "Multidisciplinary course offerings",
      icon: BookOpen,
      color: "bg-brand-green",
      link: "/student",
    },
    {
      title: "Faculty Dashboard",
      description: "Manage teaching assignments and preferences",
      icon: Users,
      color: "bg-faculty-primary",
      link: "/faculty",
    },
  ];

  const recentActivities = [
    {
      title: "New timetable generated for Computer Science",
      time: "2 hours ago",
      status: "success",
    },
    {
      title: "Credit verification pending for 23 students",
      time: "4 hours ago",
      status: "warning",
    },
    {
      title: "Faculty preferences updated",
      time: "6 hours ago",
      status: "info",
    },
    {
      title: "Course registration deadline approaching",
      time: "1 day ago",
      status: "warning",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-brand-saffron/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            NEP 2020 Compliant
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            National Education Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Empowering multidisciplinary education with AI-powered timetabling, 
            Academic Bank of Credits, and seamless administrative management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 shadow-glow"
              asChild
            >
              <Link to="/student">
                <BookOpen className="mr-2 h-5 w-5" />
                Student Portal
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-white/50 hover:bg-white/10"
              asChild
            >
              <Link to="/admin">
                <Users className="mr-2 h-5 w-5" />
                Admin Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-success mr-1" />
                      <span className="text-sm text-success font-medium">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickActions.map((action, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elevated transition-all duration-300 cursor-pointer"
                >
                  <Link to={action.link}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${action.color} text-white`}>
                          <action.icon className="h-6 w-6" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <CardTitle className="group-hover:text-brand-saffron transition-colors">
                        {action.title}
                      </CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </CardHeader>
                    {action.image && (
                      <div className="px-6 pb-6">
                        <img 
                          src={action.image} 
                          alt={action.title}
                          className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    )}
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Activities</h2>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1">
                        {activity.status === "success" && (
                          <CheckCircle className="h-5 w-5 text-success" />
                        )}
                        {activity.status === "warning" && (
                          <AlertCircle className="h-5 w-5 text-warning" />
                        )}
                        {activity.status === "info" && (
                          <Clock className="h-5 w-5 text-info" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;