import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Search, 
  Clock, 
  Users, 
  Award,
  Plus,
  Filter,
  Star,
  Calendar
} from "lucide-react";

const StudentPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const availableCourses = [
    {
      id: 1,
      title: "Introduction to Data Science",
      code: "CS-DS-101",
      credits: 4,
      department: "Computer Science",
      instructor: "Dr. Sarah Johnson",
      duration: "14 weeks",
      enrolled: 45,
      capacity: 60,
      rating: 4.8,
      description: "Comprehensive introduction to data analysis, machine learning, and statistical methods.",
      prerequisites: ["Mathematics", "Statistics"],
      tags: ["Popular", "Multidisciplinary"]
    },
    {
      id: 2,
      title: "Digital Marketing & Psychology",
      code: "BM-PSY-201",
      credits: 3,
      department: "Business & Psychology",
      instructor: "Prof. Michael Chen",
      duration: "12 weeks",
      enrolled: 32,
      capacity: 40,
      rating: 4.6,
      description: "Interdisciplinary course combining marketing strategies with consumer psychology.",
      prerequisites: ["Basic Psychology"],
      tags: ["Interdisciplinary", "Career-focused"]
    },
    {
      id: 3,
      title: "Environmental Science & Policy",
      code: "ENV-POL-301",
      credits: 4,
      department: "Environmental Studies",
      instructor: "Dr. Lisa Patel",
      duration: "16 weeks",
      enrolled: 28,
      capacity: 35,
      rating: 4.9,
      description: "Exploring environmental challenges through scientific and policy perspectives.",
      prerequisites: ["Basic Science"],
      tags: ["Research-intensive", "Current Affairs"]
    },
    {
      id: 4,
      title: "Creative Writing & Digital Media",
      code: "ENG-DM-202",
      credits: 3,
      department: "English & Media",
      instructor: "Prof. James Rodriguez",
      duration: "10 weeks",
      enrolled: 38,
      capacity: 45,
      rating: 4.7,
      description: "Combining traditional writing skills with modern digital storytelling techniques.",
      prerequisites: ["English Fundamentals"],
      tags: ["Creative", "Technology"]
    },
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Introduction to Data Science",
      code: "CS-DS-101",
      credits: 4,
      progress: 65,
      nextClass: "Today 2:00 PM",
      assignments: 3,
      grade: "A-"
    },
    {
      id: 2,
      title: "Digital Marketing & Psychology", 
      code: "BM-PSY-201",
      credits: 3,
      progress: 80,
      nextClass: "Tomorrow 10:00 AM",
      assignments: 1,
      grade: "B+"
    }
  ];

  const creditsSummary = {
    totalEarned: 87,
    currentSemester: 12,
    requiredForDegree: 120,
    gpa: 3.78
  };

  const filteredCourses = availableCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "popular") return matchesSearch && course.tags.includes("Popular");
    if (selectedFilter === "interdisciplinary") return matchesSearch && course.tags.includes("Interdisciplinary");
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-student-light">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-student bg-clip-text text-transparent">
            Student Portal
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover multidisciplinary courses and manage your academic journey
          </p>
        </div>

        {/* Credits Overview */}
        <Card className="mb-8 shadow-card bg-gradient-student text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{creditsSummary.totalEarned}</div>
                <div className="text-sm opacity-90">Credits Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{creditsSummary.currentSemester}</div>
                <div className="text-sm opacity-90">Current Semester</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{creditsSummary.requiredForDegree}</div>
                <div className="text-sm opacity-90">Required for Degree</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{creditsSummary.gpa}</div>
                <div className="text-sm opacity-90">Current GPA</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Courses</TabsTrigger>
            <TabsTrigger value="enrolled">My Courses</TabsTrigger>
            <TabsTrigger value="schedule">My Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses, departments, or instructors..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("all")}
                  size="sm"
                >
                  All Courses
                </Button>
                <Button
                  variant={selectedFilter === "popular" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("popular")}
                  size="sm"
                >
                  Popular
                </Button>
                <Button
                  variant={selectedFilter === "interdisciplinary" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("interdisciplinary")}
                  size="sm"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  Interdisciplinary
                </Button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription className="font-mono text-sm">{course.code}</CardDescription>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4 text-faculty-primary" />
                          <span>{course.credits} Credits</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{course.enrolled}/{course.capacity} enrolled</span>
                        </div>
                        <span className="text-muted-foreground">{course.instructor}</span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Enrollment</span>
                          <span>{Math.round((course.enrolled / course.capacity) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-student-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                          />
                        </div>
                      </div>

                      <Button className="w-full bg-student-primary hover:bg-student-primary/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enrolled" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription className="font-mono text-sm">{course.code}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-success/10 text-success border-success">
                        {course.grade}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-student-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{course.nextClass}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4 text-warning" />
                          <span>{course.assignments} pending</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Your personalized timetable for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">Your schedule will appear here</p>
                  <p className="text-sm">Generated timetables will be displayed in an interactive calendar view</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentPortal;