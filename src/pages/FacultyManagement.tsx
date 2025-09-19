import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Search, 
  Plus,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  BookOpen,
  Star,
  TrendingUp,
  Award,
  User
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FacultyManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const facultyStats = [
    {
      title: "Total Faculty",
      value: "247",
      change: "+12%",
      icon: Users,
      color: "text-faculty-primary"
    },
    {
      title: "Active Courses",
      value: "156",
      change: "+8%",
      icon: BookOpen,
      color: "text-brand-green"
    },
    {
      title: "Avg. Student Rating",
      value: "4.7",
      change: "+0.3",
      icon: Star,
      color: "text-warning"
    },
    {
      title: "Research Papers",
      value: "89",
      change: "+23%",
      icon: Award,
      color: "text-student-primary"
    }
  ];

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      designation: "Professor",
      department: "Computer Science",
      email: "s.johnson@university.edu",
      phone: "+91-98765-43210",
      expertise: ["Data Science", "Machine Learning", "AI"],
      courses: ["CS-DS-101", "CS-ML-301"],
      rating: 4.8,
      experience: "12 years",
      publications: 45,
      status: "active",
      joinDate: "2012-08-15",
      officeHours: "Mon-Wed 2:00-4:00 PM"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      designation: "Associate Professor", 
      department: "Business Administration",
      email: "m.chen@university.edu",
      phone: "+91-98765-43211",
      expertise: ["Digital Marketing", "Consumer Psychology", "Strategy"],
      courses: ["BM-PSY-201", "BM-STR-301"],
      rating: 4.6,
      experience: "8 years",
      publications: 32,
      status: "active",
      joinDate: "2016-01-10",
      officeHours: "Tue-Thu 10:00-12:00 PM"
    },
    {
      id: 3,
      name: "Dr. Lisa Patel",
      designation: "Professor",
      department: "Environmental Studies",
      email: "l.patel@university.edu",
      phone: "+91-98765-43212",
      expertise: ["Environmental Policy", "Climate Change", "Sustainability"],
      courses: ["ENV-POL-301", "ENV-CLI-401"],
      rating: 4.9,
      experience: "15 years",
      publications: 67,
      status: "active",
      joinDate: "2009-03-20",
      officeHours: "Mon-Fri 1:00-2:00 PM"
    },
    {
      id: 4,
      name: "Prof. James Rodriguez",
      designation: "Assistant Professor",
      department: "English & Media",
      email: "j.rodriguez@university.edu", 
      phone: "+91-98765-43213",
      expertise: ["Creative Writing", "Digital Storytelling", "Media Studies"],
      courses: ["ENG-CW-202", "ENG-DM-301"],
      rating: 4.7,
      experience: "6 years",
      publications: 23,
      status: "on_leave",
      joinDate: "2018-07-01",
      officeHours: "Wed-Fri 3:00-5:00 PM"
    }
  ];

  const courseAssignments = [
    {
      courseCode: "CS-DS-101",
      courseName: "Introduction to Data Science",
      faculty: "Dr. Sarah Johnson",
      students: 45,
      capacity: 60,
      schedule: "Mon/Wed 2:00-3:30 PM",
      room: "CS-Lab-101",
      semester: "Spring 2024"
    },
    {
      courseCode: "BM-PSY-201",
      courseName: "Digital Marketing & Psychology",
      faculty: "Prof. Michael Chen",
      students: 32,
      capacity: 40,
      schedule: "Tue/Thu 10:00-11:30 AM",
      room: "Business-201",
      semester: "Spring 2024"
    },
    {
      courseCode: "ENV-POL-301",
      courseName: "Environmental Policy Analysis", 
      faculty: "Dr. Lisa Patel",
      students: 28,
      capacity: 35,
      schedule: "Mon/Wed/Fri 1:00-2:00 PM",
      room: "ENV-Hall-A",
      semester: "Spring 2024"
    }
  ];

  const preferences = [
    {
      faculty: "Dr. Sarah Johnson",
      preferredTimes: ["Morning", "Afternoon"],
      avoidTimes: ["Early Morning"],
      maxCoursesPerSemester: 3,
      preferredRooms: ["CS-Lab-101", "CS-Lab-102"],
      collaborations: ["Prof. Michael Chen"],
      researchDays: ["Friday"]
    },
    {
      faculty: "Prof. Michael Chen",
      preferredTimes: ["Morning"],
      avoidTimes: ["Evening"],
      maxCoursesPerSemester: 2,
      preferredRooms: ["Business-201", "Business-301"],
      collaborations: ["Dr. Sarah Johnson", "Dr. Lisa Patel"],
      researchDays: ["Friday"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-faculty-light">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-faculty-primary">
              Faculty Management
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive faculty administration and course assignment
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
            <Button className="bg-faculty-primary hover:bg-faculty-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Faculty
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {facultyStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
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

        <Tabs defaultValue="directory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="directory">Faculty Directory</TabsTrigger>
            <TabsTrigger value="assignments">Course Assignments</TabsTrigger>
            <TabsTrigger value="preferences">Scheduling Preferences</TabsTrigger>
            <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="directory" className="space-y-6">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, department, or expertise..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                Filter Faculty
              </Button>
            </div>

            {/* Faculty Directory */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyMembers.map((faculty) => (
                <Card key={faculty.id} className="shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-faculty-primary text-white text-lg font-semibold">
                            {faculty.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{faculty.name}</h3>
                          <p className="text-sm text-muted-foreground">{faculty.designation}</p>
                          <p className="text-sm text-faculty-primary font-medium">{faculty.department}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={faculty.status === 'active' ? 'default' : 'secondary'}
                        className={faculty.status === 'active' ? 'bg-success text-white' : 'bg-warning text-white'}
                      >
                        {faculty.status.replace('_', ' ').toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{faculty.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{faculty.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{faculty.officeHours}</span>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div>
                      <p className="text-sm font-medium mb-2">Expertise</p>
                      <div className="flex flex-wrap gap-1">
                        {faculty.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="h-4 w-4 text-warning" />
                          <span className="font-semibold">{faculty.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Award className="h-4 w-4 text-brand-green" />
                          <span className="font-semibold">{faculty.publications}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Publications</p>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Course Assignments</CardTitle>
                    <CardDescription>Current semester teaching assignments</CardDescription>
                  </div>
                  <Button className="bg-brand-green hover:bg-brand-green/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Assign Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Faculty</TableHead>
                      <TableHead>Enrollment</TableHead>
                      <TableHead>Schedule</TableHead>
                      <TableHead>Room</TableHead>
                      <TableHead>Semester</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseAssignments.map((assignment, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{assignment.courseName}</div>
                            <div className="text-sm text-muted-foreground">{assignment.courseCode}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-faculty-primary text-white text-xs">
                                {assignment.faculty.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{assignment.faculty}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">{assignment.students}/{assignment.capacity}</span>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-student-primary h-2 rounded-full"
                                style={{ width: `${(assignment.students / assignment.capacity) * 100}%` }}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">{assignment.schedule}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{assignment.room}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{assignment.semester}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Scheduling Preferences</CardTitle>
                <CardDescription>Faculty teaching preferences for AI timetable generation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {preferences.map((pref, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-card transition-shadow">
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-faculty-primary text-white">
                            {pref.faculty.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{pref.faculty}</h3>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Preferred Times</p>
                          <div className="flex flex-wrap gap-1">
                            {pref.preferredTimes.map((time) => (
                              <Badge key={time} className="bg-success text-white text-xs">
                                {time}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Avoid Times</p>
                          <div className="flex flex-wrap gap-1">
                            {pref.avoidTimes.map((time) => (
                              <Badge key={time} variant="destructive" className="text-xs">
                                {time}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Max Courses</p>
                          <Badge variant="outline" className="text-xs">
                            {pref.maxCoursesPerSemester} per semester
                          </Badge>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Preferred Rooms</p>
                          <div className="flex flex-wrap gap-1">
                            {pref.preferredRooms.map((room) => (
                              <Badge key={room} variant="secondary" className="text-xs">
                                {room}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Research Days</p>
                          <div className="flex flex-wrap gap-1">
                            {pref.researchDays.map((day) => (
                              <Badge key={day} className="bg-info text-white text-xs">
                                {day}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Teaching Performance</CardTitle>
                  <CardDescription>Faculty evaluation and student feedback</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-8">
                  <User className="h-16 w-16 mx-auto mb-4 text-faculty-primary opacity-50" />
                  <p className="text-lg font-semibold mb-2">Performance Analytics</p>
                  <p className="text-muted-foreground">
                    Comprehensive faculty performance tracking and evaluation
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Research Output</CardTitle>
                  <CardDescription>Publications and research metrics</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-8">
                  <Award className="h-16 w-16 mx-auto mb-4 text-brand-green opacity-50" />
                  <p className="text-lg font-semibold mb-2">Research Metrics</p>
                  <p className="text-muted-foreground">
                    Track publications, citations, and research impact
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FacultyManagement;