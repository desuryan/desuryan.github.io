import photo from '../assets/photo.jpeg'

export interface ContactLink {
  label: string
  href: string
}

export interface Experience {
  title: string
  company: string
  location: string
  start: string
  end: string
  highlights: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  start: string
  end: string
  details?: string
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface Project {
  name: string
  description: string
  href?: string
  tech: string[]
}

export interface Resume {
  name: string
  role: string
  location: string
  email: string
  phone?: string
  photoUrl?: string
  links: ContactLink[]
  summary: string
  experience: Experience[]
  education: Education[]
  skills: SkillGroup[]
  projects: Project[]
  lastUpdated: string
}

export const resume: Resume = {
  name: 'Suryakanta Panda',
  role: 'Senior Software Development Engineer',
  location: 'Hyderabad, India',
  email: 'desuryan@yahoo.com',
  phone: '+91-6363577615',
  photoUrl: photo,
  links: [
    { label: 'linkedin.com/s-panda', href: 'https://www.linkedin.com/in/s-panda-39095023/' },
    { label: 'github.com/desuryan', href: 'https://github.com/desuryan' },
  ],
  summary:
    'Senior Software Development Engineer with 10+ years of experience designing, developing, and scaling backend platforms, distributed systems, microservices, and real-time data processing solutions. Proven ability to lead engineering teams, own system architecture, and deliver production-ready software for cloud-connected enterprise platforms requiring performance, scalability, reliability, and future extensibility. Strong hands-on expertise in Java, Python, C#, Golang, REST APIs, object-oriented programming, event-driven architecture, cloud-edge integration, databases, messaging systems, and DevOps practices. Experienced in building low-latency, fault-tolerant, and highly available systems that process large volumes of real-time data across distributed environments.',
  experience: [
    {
      title: 'Sr. Lead Software Development Engineer',
      company: 'Larsen and Toubro',
      location: 'India',
      start: 'Jan 2022',
      end: 'Present',
      highlights: [
        'Lead an 11-member engineering team delivering scalable backend platforms, distributed systems, real-time data processing services, and cloud-integrated enterprise software.',
        'Architect and implement high-performance software using microservices, event-driven design, REST APIs, messaging systems, relational and non-relational databases, and cloud-native deployment patterns.',
        'Make design decisions focused on performance, scalability, reliability, maintainability, and future expansion across complex distributed software platforms.',
        'Improved system latency by 30% through performance tuning, asynchronous processing, architecture optimization, and distributed component improvements across 10,000+ connected assets.',
        'Drive full SDLC ownership including system design, implementation, code reviews, technical documentation, automation, testing, mentoring, stakeholder collaboration, and delivery governance.',
      ],
    },
    {
      title: 'Lead Software Development Engineer',
      company: 'Solulever BV',
      location: 'Netherlands',
      start: 'Mar 2021',
      end: 'Jan 2022',
      highlights: [
        'Designed and developed a modular Industrial IoT edge platform for real-time data ingestion, distributed processing, cloud connectivity, and multi-source integration.',
        'Built backend services using Java, Go, and Python for data orchestration, device connectivity, monitoring, automation, workload distribution, and platform extensibility.',
        'Implemented scalable communication layers using API-first design, message-driven workflows, microservices-oriented architecture, and reusable integration components.',
        'Supported proof-of-concept design, end-to-end software delivery, deployment planning, DevOps workflows, remote monitoring, software updates, testing, and production rollout.',
      ],
    },
    {
      title: 'Senior Software Development Engineer',
      company: 'Siemens Technology and Services Ltd.',
      location: 'India',
      start: 'Mar 2019',
      end: 'Mar 2021',
      highlights: [
        'Developed backend software, middleware components, and distributed data acquisition services for smart infrastructure and enterprise-scale monitoring platforms.',
        'Built reliable software agents for collecting, transforming, processing, and transmitting real-time data across distributed systems.',
        'Supported all phases of SDLC including design, implementation, integration testing, validation, debugging, root-cause analysis, performance tuning, and production troubleshooting.',
        'Collaborated with globally distributed engineering teams—architects, developers, testers, and customer-facing teams—to deliver scalable, high-quality, production-ready software.',
      ],
    },
    {
      title: 'Application Engineer',
      company: 'Alltronix India Ltd.',
      location: 'India',
      start: 'Dec 2015',
      end: 'Dec 2018',
      highlights: [
        'Developed backend applications, integration services, automation software, and data connectivity solutions for industrial and enterprise environments.',
        'Built communication interfaces connecting PLCs, RTUs, servers, databases, supervisory systems, and external applications.',
        'Implemented data acquisition, monitoring, reporting, troubleshooting, and process control features for real-time operational systems.',
        'Supported end-to-end software delivery including requirements analysis, solution design, development, testing, deployment, commissioning, and support.',
      ],
    },
  ],
  education: [
    {
      degree: 'M.Tech in Artificial Intelligence and Machine Learning',
      school: 'Birla Institute of Technology and Science, Pilani',
      location: 'Pilani, India',
      start: 'Nov 2023',
      end: 'Nov 2025',
    },
    {
      degree: 'B.Tech in Electrical and Electronics Engineering',
      school: 'Biju Patnaik University of Technology, Odisha',
      location: 'Odisha, India',
      start: 'Jul 2010',
      end: 'Jul 2014',
    },
  ],
  skills: [
    {
      name: 'Programming Languages',
      items: ['Java', 'Python', 'C#', 'Golang', 'JavaScript', 'C', 'C++'],
    },
    {
      name: 'Backend & Frameworks',
      items: [
        'Spring Boot',
        'Spring MVC',
        'Hibernate',
        'REST APIs',
        'gRPC',
        'Django',
        'FastAPI',
        'Gin',
        'CQRS',
        'Clean Architecture',
        'Apache PLC4X',
      ],
    },
    {
      name: 'Architecture & Engineering',
      items: [
        'Distributed Systems',
        'Microservices',
        'Event-Driven Architecture',
        'Low-Latency Architecture',
        'Cloud-Edge Integration',
        'Real-Time Systems',
        'Scalable Backend Systems',
      ],
    },
    {
      name: 'Industrial & IoT Protocols',
      items: [
        'IEC 61850',
        'IEC 60870',
        'DNP3',
        'C37.118',
        'OPC UA',
        'Modbus',
        'MQTT',
        'AMQP',
        'PROFINET',
        'BACnet',
      ],
    },
    {
      name: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Jenkins', 'Git', 'Maven', 'Gradle', 'CI/CD'],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'SQL Server', 'InfluxDB', 'Redis', 'Cassandra'],
    },
    {
      name: 'Messaging',
      items: ['Kafka', 'RabbitMQ', 'Redis Pub/Sub', 'Mosquitto', 'Amazon SQS'],
    },
    {
      name: 'ML & Analytics',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Grafana', 'Tableau', 'Node-RED'],
    },
  ],
  projects: [
    {
      name: 'GRID SCADA',
      description:
        'Developed IEC 61850 MMS client module for the data acquisition subsystem. Integrated 100,000+ data points with sub-second reporting performance and improved reliability of grid communication workflows.',
      tech: ['IEC 61850', 'Java', 'Real-Time Systems'],
    },
    {
      name: 'Wide Area Measurements System (WAMS)',
      description:
        'Designed mission-critical distributed applications for real-time monitoring and wide-area data processing. Achieved under 2 ms latency for PDC-WAMS processing with 50 PMUs.',
      tech: ['C37.118', 'PMU', 'Low-Latency Architecture'],
    },
    {
      name: 'Brabo — IoT Edge Platform',
      description:
        'Modular Industrial IoT architecture for real-time data integration, distributed processing, batching, and edge-to-cloud orchestration for manufacturing and industrial monitoring.',
      tech: ['Java', 'Go', 'Python', 'MQTT', 'Microservices'],
    },
    {
      name: 'NXPower',
      description:
        'Smart energy management platform for distributed assets—backend services, real-time data processing, asset visibility, and infrastructure-level optimization.',
      tech: ['REST APIs', 'Data Acquisition', 'Analytics'],
    },
    {
      name: 'NeuralGRID',
      description:
        'Centralized software platform for monitoring and control across large-scale renewable energy plants with high-volume data acquisition and control-center integration.',
      tech: ['Distributed Systems', 'Integration Patterns'],
    },
    {
      name: 'Smart City EMS, Dubai Expo City',
      description:
        'Integrated IoT data streams for energy and infrastructure monitoring with backend components for data acquisition, analytics, and operational observability.',
      tech: ['IoT', 'Grafana', 'Real-Time Monitoring'],
    },
  ],
  lastUpdated: 'May 2026',
}
