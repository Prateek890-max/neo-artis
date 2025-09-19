import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Settings,
  Plus,
  Search,
  Filter,
  MoreVertical,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const systemStats = [
    {
      title: "Total Users",
      value: "15,234",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-admin-primary"
    },
    {
      title: "Active Courses",
      value: "347",
      change: "+8%", 
      trend: "up",
      icon: BookOpen,
      color: "text-brand-green"
    },
    {
      title: "Scheduling Conflicts",
      value: "3",
      change: "-67%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      title: "System Uptime",
      value: "99.8%",
      change: "+0.1%",
      trend: "up",
      icon: CheckCircle,
      color: "text-success"
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "s.johnson@university.edu",
      role: "Faculty",
      status: "active",
      lastLogin: "2 hours ago",
      department: "Computer Science"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@student.edu",
      role: "Student",
      status: "active",
      lastLogin: "30 mins ago",
      department: "Business"
    },
    {
      id: 3,
      name: "Prof. Lisa Patel",
      email: "l.patel@university.edu",
      role: "Faculty",
      status: "inactive",
      lastLogin: "3 days ago",
      department: "Environmental Studies"
    },
    {
      id: 4,
      name: "James Rodriguez",
      email: "j.rodriguez@university.edu",
      role: "Administrator",
      status: "active",
      lastLogin: "1 hour ago",
      department: "Administration"
    }
  ];

  const courseManagement = [
    {
      id: 1,
      title: "Introduction to Data Science",
      code: "CS-DS-101",
      department: "Computer Science",
      students: 45,
      capacity: 60,
      instructor: "Dr. Sarah Johnson",
      status: "active",
      nextClass: "Today 2:00 PM"
    },
    {
      id: 2,
      title: "Digital Marketing & Psychology",
      code: "BM-PSY-201",
      department: "Business",
      students: 32,
      capacity: 40,
      instructor: "Prof. Michael Chen",
      status: "active",
      nextClass: "Tomorrow 10:00 AM"
    },
    {
      id: 3,
      title: "Environmental Policy Analysis",
      code: "ENV-POL-301",
      department: "Environmental Studies",
      students: 28,
      capacity: 35,
      instructor: "Dr. Lisa Patel",
      status: "draft",
      nextClass: "Not scheduled"
    }
  ];

  const systemLogs = [
    {
      timestamp: "2024-01-15 14:30:25",
      action: "Timetable Generation",
      user: "System AI",
      status: "success",
      details: "Generated conflict-free schedule for Computer Science department"
    },
    {
      timestamp: "2024-01-15 13:45:12",
      action: "User Registration",
      user: "registration.system",
      status: "success",
      details: "New student registered: Michael Chen"
    },
    {
      timestamp: "2024-01-15 12:20:08",
      action: "Course Update",
      user: "Dr. Sarah Johnson",
      status: "warning",
      details: "Course capacity changed from 50 to 60 students"
    },
    {
      timestamp: "2024-01-15 11:15:33",
      action: "System Backup",
      user: "backup.service",
      status: "success",
      details: "Daily database backup completed successfully"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-admin-light">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-admin bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive system management and monitoring
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
            <Button className="bg-admin-primary hover:bg-admin-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-success' : 'text-error'}`} />
                      <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-success' : 'text-error'}`}>
                        {stat.change}
                      </span>
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

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="courses">Course Management</TabsTrigger>
            <TabsTrigger value="scheduling">AI Scheduling</TabsTrigger>
            <TabsTrigger value="logs">System Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users by name, email, or department..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter Users
              </Button>
            </div>

            {/* Users Table */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={user.role === 'Administrator' ? 'default' : 'secondary'}
                            className={
                              user.role === 'Faculty' ? 'bg-faculty-light text-faculty-primary' :
                              user.role === 'Student' ? 'bg-student-light text-student-primary' : ''
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {user.lastLogin}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Course Management</CardTitle>
                    <CardDescription>Manage course catalog and enrollments</CardDescription>
                  </div>
                  <Button className="bg-brand-green hover:bg-brand-green/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Enrollment</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Next Class</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseManagement.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{course.title}</div>
                            <div className="text-sm text-muted-foreground">{course.code}</div>
                          </div>
                        </TableCell>
                        <TableCell>{course.department}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">{course.students}/{course.capacity}</span>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-student-primary h-2 rounded-full"
                                style={{ width: `${(course.students / course.capacity) * 100}%` }}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{course.instructor}</TableCell>
                        <TableCell>
                          <Badge variant={course.status === 'active' ? 'default' : 'secondary'}>
                            {course.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {course.nextClass}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduling" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>AI Timetable Generator</CardTitle>
                  <CardDescription>Automated conflict-free scheduling system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    <Calendar className="h-16 w-16 mx-auto mb-4 text-admin-primary opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">Genetic Algorithm Scheduler</h3>
                    <p className="text-muted-foreground mb-4">
                      Generate optimized timetables using AI-powered conflict resolution
                    </p>
                    <Button className="bg-admin-primary hover:bg-admin-primary/90">
                      Generate New Timetable
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Scheduling Status</CardTitle>
                  <CardDescription>Current scheduling system performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Conflict Resolution</span>
                      <span className="text-sm font-medium">98.7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '98.7%' }} />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Resource Utilization</span>
                      <span className="text-sm font-medium">87.3%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-info h-2 rounded-full" style={{ width: '87.3%' }} />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Generation Speed</span>
                      <span className="text-sm font-medium">92.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-warning h-2 rounded-full" style={{ width: '92.1%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>System Activity Logs</CardTitle>
                <CardDescription>Real-time system monitoring and audit trail</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemLogs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="mt-1">
                        {log.status === 'success' && (
                          <CheckCircle className="h-5 w-5 text-success" />
                        )}
                        {log.status === 'warning' && (
                          <AlertTriangle className="h-5 w-5 text-warning" />
                        )}
                        {log.status === 'error' && (
                          <AlertTriangle className="h-5 w-5 text-error" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{log.action}</p>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{log.details}</p>
                        <p className="text-xs text-muted-foreground mt-1">By: {log.user}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;