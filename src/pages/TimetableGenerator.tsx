import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Play, 
  Settings, 
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  MapPin
} from "lucide-react";
import timetableIcon from "@/assets/timetable-icon.jpg";

const TimetableGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generationStatus, setGenerationStatus] = useState<'idle' | 'running' | 'completed' | 'error'>('idle');

  const departments = [
    "Computer Science",
    "Business Administration", 
    "Environmental Studies",
    "English & Media",
    "Mathematics",
    "Psychology"
  ];

  const constraints = [
    { name: "Faculty Availability", status: "satisfied", conflicts: 0 },
    { name: "Room Capacity", status: "satisfied", conflicts: 0 },
    { name: "Time Slot Conflicts", status: "warning", conflicts: 2 },
    { name: "Resource Allocation", status: "satisfied", conflicts: 0 },
    { name: "Course Prerequisites", status: "satisfied", conflicts: 0 },
  ];

  const sampleTimetable = [
    {
      time: "09:00 - 10:30",
      monday: { course: "Data Science", room: "CS-101", instructor: "Dr. Johnson" },
      tuesday: { course: "Psychology", room: "PSY-201", instructor: "Prof. Chen" },
      wednesday: { course: "Data Science", room: "CS-101", instructor: "Dr. Johnson" },
      thursday: { course: "Marketing", room: "BM-301", instructor: "Dr. Patel" },
      friday: { course: "Environmental Policy", room: "ENV-101", instructor: "Prof. Rodriguez" }
    },
    {
      time: "10:45 - 12:15",
      monday: { course: "Digital Media", room: "ENG-205", instructor: "Prof. Rodriguez" },
      tuesday: { course: "Statistics", room: "MATH-102", instructor: "Dr. Kumar" },
      wednesday: { course: "Research Methods", room: "PSY-301", instructor: "Prof. Chen" },
      thursday: { course: "Data Science", room: "CS-101", instructor: "Dr. Johnson" },
      friday: { course: "Business Ethics", room: "BM-201", instructor: "Dr. Patel" }
    },
    {
      time: "14:00 - 15:30",
      monday: { course: "Machine Learning", room: "CS-201", instructor: "Dr. Johnson" },
      tuesday: { course: "Environmental Science", room: "ENV-101", instructor: "Prof. Rodriguez" },
      wednesday: { course: "Creative Writing", room: "ENG-105", instructor: "Prof. Rodriguez" },
      thursday: { course: "Business Analytics", room: "BM-301", instructor: "Dr. Patel" },
      friday: { course: "Cognitive Psychology", room: "PSY-201", instructor: "Prof. Chen" }
    },
    {
      time: "15:45 - 17:15",
      monday: { course: "Database Systems", room: "CS-102", instructor: "Dr. Kumar" },
      tuesday: { course: "Marketing Strategy", room: "BM-301", instructor: "Dr. Patel" },
      wednesday: { course: "Data Visualization", room: "CS-201", instructor: "Dr. Johnson" },
      thursday: { course: "Environmental Law", room: "ENV-201", instructor: "Prof. Martinez" },
      friday: { course: "Digital Storytelling", room: "ENG-205", instructor: "Prof. Rodriguez" }
    }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationStatus('running');
    setProgress(0);

    // Simulate AI generation process
    const intervals = [
      { step: "Initializing genetic algorithm...", progress: 15 },
      { step: "Analyzing constraints...", progress: 30 },
      { step: "Generating population...", progress: 50 },
      { step: "Running evolution cycles...", progress: 75 },
      { step: "Optimizing solution...", progress: 90 },
      { step: "Finalizing timetable...", progress: 100 }
    ];

    for (const interval of intervals) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(interval.progress);
    }

    setGenerationStatus('completed');
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-brand-saffron/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-brand-navy">
            AI Timetable Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Genetic Algorithm-powered conflict-free scheduling system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Generation Controls */}
          <div className="lg:col-span-1">
            <Card className="shadow-card mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <img src={timetableIcon} alt="Timetable" className="w-8 h-8 rounded" />
                  <CardTitle>Generation Settings</CardTitle>
                </div>
                <CardDescription>Configure AI parameters for optimal scheduling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Department</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept.toLowerCase()}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Semester</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring2024">Spring 2024</SelectItem>
                      <SelectItem value="fall2024">Fall 2024</SelectItem>
                      <SelectItem value="summer2024">Summer 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Optimization Priority</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conflicts">Minimize Conflicts</SelectItem>
                      <SelectItem value="resources">Optimize Resources</SelectItem>
                      <SelectItem value="preferences">Faculty Preferences</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full bg-admin-primary hover:bg-admin-primary/90"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Generate Timetable
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Constraints Check */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Constraint Analysis</CardTitle>
                <CardDescription>System constraint validation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {constraints.map((constraint, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {constraint.status === 'satisfied' ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-warning" />
                        )}
                        <span className="text-sm">{constraint.name}</span>
                      </div>
                      <Badge 
                        variant={constraint.status === 'satisfied' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {constraint.conflicts === 0 ? 'OK' : `${constraint.conflicts} conflicts`}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Generation Status */}
            {generationStatus === 'running' && (
              <Card className="shadow-card mb-6 bg-gradient-admin text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <RefreshCw className="h-8 w-8 animate-spin" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Generating Timetable...</h3>
                      <p className="text-sm opacity-90 mb-3">
                        AI is processing {departments.length} departments with genetic algorithm optimization
                      </p>
                      <Progress value={progress} className="bg-white/20" />
                      <p className="text-xs opacity-75 mt-2">{progress}% Complete</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Generated Timetable */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Generated Schedule</CardTitle>
                    <CardDescription>
                      {generationStatus === 'completed' ? 
                        'AI-optimized conflict-free timetable' : 
                        'Sample timetable layout'
                      }
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-1" />
                      Settings
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left p-3 border-b font-semibold">Time</th>
                        <th className="text-left p-3 border-b font-semibold">Monday</th>
                        <th className="text-left p-3 border-b font-semibold">Tuesday</th>
                        <th className="text-left p-3 border-b font-semibold">Wednesday</th>
                        <th className="text-left p-3 border-b font-semibold">Thursday</th>
                        <th className="text-left p-3 border-b font-semibold">Friday</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleTimetable.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3 font-medium text-sm bg-gray-50">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span>{row.time}</span>
                            </div>
                          </td>
                          {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const).map((day) => (
                            <td key={day} className="p-3">
                              {row[day] && (
                                <div className="bg-student-light border-l-4 border-student-primary p-3 rounded-r">
                                  <div className="flex items-center space-x-1 mb-1">
                                    <BookOpen className="h-3 w-3 text-student-primary" />
                                    <span className="font-medium text-sm">{row[day].course}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                                    <MapPin className="h-3 w-3" />
                                    <span>{row[day].room}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                    <Users className="h-3 w-3" />
                                    <span>{row[day].instructor}</span>
                                  </div>
                                </div>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableGenerator;