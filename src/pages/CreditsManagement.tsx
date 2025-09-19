import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Search, 
  Download,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Users,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import creditsIcon from "@/assets/credits-icon.jpg";

const CreditsManagement = () => {
  const creditStats = [
    {
      title: "Total Credits Issued",
      value: "124,567",
      change: "+18.2%",
      icon: Award,
      color: "text-brand-green"
    },
    {
      title: "Pending Verifications",
      value: "89",
      change: "-23%",
      icon: Clock,
      color: "text-warning"
    },
    {
      title: "Active Students",
      value: "3,456",
      change: "+12%",
      icon: Users,
      color: "text-student-primary"
    },
    {
      title: "Partner Institutions",
      value: "147",
      change: "+8%",
      icon: GraduationCap,
      color: "text-faculty-primary"
    }
  ];

  const creditTransactions = [
    {
      id: "TXN001",
      student: "Rahul Sharma",
      course: "Data Science Fundamentals",
      credits: 4,
      institution: "ABC University",
      status: "verified",
      date: "2024-01-15",
      grade: "A"
    },
    {
      id: "TXN002", 
      student: "Priya Patel",
      course: "Digital Marketing Strategy",
      credits: 3,
      institution: "XYZ College",
      status: "pending",
      date: "2024-01-14",
      grade: "B+"
    },
    {
      id: "TXN003",
      student: "Amit Kumar",
      course: "Environmental Policy Analysis",
      credits: 4,
      institution: "DEF Institute",
      status: "verified",
      date: "2024-01-13",
      grade: "A-"
    },
    {
      id: "TXN004",
      student: "Sneha Reddy",
      course: "Creative Writing Workshop",
      credits: 2,
      institution: "GHI University",
      status: "rejected",
      date: "2024-01-12",
      grade: "C+"
    }
  ];

  const creditRequests = [
    {
      id: "REQ001",
      student: "Vikram Singh",
      studentId: "ST2024001",
      course: "Machine Learning Applications",
      requestedCredits: 4,
      sourceInstitution: "Tech University",
      submittedDate: "2024-01-10",
      documents: ["Transcript.pdf", "Certificate.pdf"],
      status: "under_review"
    },
    {
      id: "REQ002",
      student: "Ananya Gupta", 
      studentId: "ST2024002",
      course: "Business Ethics & Philosophy",
      requestedCredits: 3,
      sourceInstitution: "Business College",
      submittedDate: "2024-01-08",
      documents: ["Grade_Report.pdf"],
      status: "pending_documents"
    }
  ];

  const partnerInstitutions = [
    {
      name: "Indian Institute of Technology, Delhi",
      code: "IIT-DEL",
      credits_transferred: 2456,
      active_students: 124,
      status: "active",
      partnership_since: "2020"
    },
    {
      name: "University of Mumbai",
      code: "MU-BOM",
      credits_transferred: 1847,
      active_students: 89,
      status: "active",
      partnership_since: "2019"
    },
    {
      name: "Bangalore University", 
      code: "BU-BLR",
      credits_transferred: 1234,
      active_students: 76,
      status: "active",
      partnership_since: "2021"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-brand-green/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <img src={creditsIcon} alt="Credits" className="w-10 h-10 rounded-lg" />
              <h1 className="text-4xl font-bold text-brand-navy">
                Academic Bank of Credits
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              NEP 2020 compliant credit transfer and recognition system
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button className="bg-brand-green hover:bg-brand-green/90">
              <Upload className="h-4 w-4 mr-2" />
              Bulk Upload
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {creditStats.map((stat, index) => (
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

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">Credit History</TabsTrigger>
            <TabsTrigger value="requests">Pending Requests</TabsTrigger>
            <TabsTrigger value="partners">Partner Network</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by student name, course, or transaction ID..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                Filter Transactions
              </Button>
            </div>

            {/* Transactions Table */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Credit Transactions</CardTitle>
                <CardDescription>Track credit transfers and verifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Institution</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {creditTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                        <TableCell className="font-medium">{transaction.student}</TableCell>
                        <TableCell>{transaction.course}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-brand-green" />
                            <span className="font-semibold">{transaction.credits}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{transaction.institution}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-success/10 text-success border-success">
                            {transaction.grade}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              transaction.status === 'verified' ? 'default' :
                              transaction.status === 'pending' ? 'secondary' : 'destructive'
                            }
                            className={
                              transaction.status === 'verified' ? 'bg-success text-white' :
                              transaction.status === 'pending' ? 'bg-warning text-white' : ''
                            }
                          >
                            {transaction.status === 'verified' && <CheckCircle className="h-3 w-3 mr-1" />}
                            {transaction.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                            {transaction.status === 'rejected' && <AlertCircle className="h-3 w-3 mr-1" />}
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{transaction.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Credit Transfer Requests</CardTitle>
                <CardDescription>Review and process credit transfer applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {creditRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-6 hover:shadow-card transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{request.student}</h3>
                          <p className="text-sm text-muted-foreground">ID: {request.studentId}</p>
                        </div>
                        <Badge 
                          variant={request.status === 'under_review' ? 'default' : 'secondary'}
                          className={request.status === 'under_review' ? 'bg-info text-white' : 'bg-warning text-white'}
                        >
                          {request.status.replace('_', ' ').toUpperCase()}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Course</p>
                          <p className="font-medium">{request.course}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Requested Credits</p>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-brand-green" />
                            <span className="font-semibold">{request.requestedCredits}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Source Institution</p>
                          <p className="font-medium">{request.sourceInstitution}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Submitted Date</p>
                          <p className="font-medium">{request.submittedDate}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Documents</p>
                        <div className="flex flex-wrap gap-2">
                          {request.documents.map((doc) => (
                            <Badge key={doc} variant="outline" className="cursor-pointer hover:bg-gray-50">
                              {doc}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Button size="sm" variant="outline">
                          Request More Info
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Partner Institution Network</CardTitle>
                    <CardDescription>Manage credit transfer partnerships</CardDescription>
                  </div>
                  <Button className="bg-faculty-primary hover:bg-faculty-primary/90">
                    Add Partner
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Institution</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Credits Transferred</TableHead>
                      <TableHead>Active Students</TableHead>
                      <TableHead>Partnership Since</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {partnerInstitutions.map((partner, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{partner.name}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{partner.code}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-brand-green" />
                            <span className="font-semibold">{partner.credits_transferred.toLocaleString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-student-primary" />
                            <span>{partner.active_students}</span>
                          </div>
                        </TableCell>
                        <TableCell>{partner.partnership_since}</TableCell>
                        <TableCell>
                          <Badge className="bg-success text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Active
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Credit Distribution</CardTitle>
                  <CardDescription>Credits by department and course type</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-8">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-brand-green opacity-50" />
                  <p className="text-lg font-semibold mb-2">Analytics Dashboard</p>
                  <p className="text-muted-foreground">
                    Comprehensive credit analytics and reporting tools
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Transfer Trends</CardTitle>
                  <CardDescription>Monthly credit transfer statistics</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-8">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-student-primary opacity-50" />
                  <p className="text-lg font-semibold mb-2">Trend Analysis</p>
                  <p className="text-muted-foreground">
                    Track credit transfer patterns and institutional performance
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

export default CreditsManagement;