---
title: FMIS Data Integration and Analytics for a US Agricultural Retailer
description: Led a two-year data architecture and data science programme integrating multiple FMIS platforms, implementing S2-based geospatial harmonisation, and delivering a unified analytics and data science platform for a major US agricultural retailer.
tags: [agriculture, data-architecture, aws, sagemaker, spark, s2, fmis, analytics, data-modelling, geospatial]
date: 2025-11-11
author: Rob Mansfield
sidebar_position: 1
---


# FMIS Data Integration and Analytics for a US Agricultural Retailer

## TL;DR
Over two years, I led the design and delivery of a unified data and analytics platform for a major US agricultural retailer using multiple Farm Management Information Systems (FMIS). Starting with a complex FMIS-to-FMIS migration, I oversaw entity resolution, geospatial harmonisation using Google’s S2 grid system, and the build-out of data models that tied operational data directly to commercial value drivers. The result was a consolidated data mart, bespoke geo-analysis capabilities, and a suite of dashboards and APIs that transformed how the business managed agronomy, inventory, and performance.

---

## Case Study

### Context
The client, one of the largest agricultural retailers in the United States, operated across hundreds of retail locations and divisions. Their agronomists used several different FMIS platforms, each with distinct schemas, collection practices, and levels of data quality. This fragmentation made it impossible to view performance across regions or even to reconcile the same farm or field across systems.

The work was delivered in two major phases over roughly two years:  
1. **FMIS-to-FMIS Migration and Entity Resolution**  
2. **Unified Analytics and Data Science Enablement**

### My Role
I ran the **data architecture and data science function**, responsible for shaping both the technical and delivery approach. I built and led the engineering team, defined our data models and pipelines, and established the culture and practices for reproducible, reliable data delivery. The engagement required close collaboration with client stakeholders, agronomists, and IT teams to align data structures with operational and commercial objectives.

### Phase 1: FMIS-to-FMIS Migration
The first challenge was consolidating data from three FMIS platforms used by thousands of agronomists and covering around ten million hectares of farmland. The data was inconsistent, heavily duplicated, and often geographically ambiguous. Fields were represented differently across systems, with variable precision and naming conventions.

To resolve this, I designed an **entity matching framework** built on **Google’s S2 spatial indexing system**, executed in **Apache Spark** to take advantage of distributed processing and the Java libraries required. S2 was chosen over H3 and GeoHash for its non-overlapping cell structure and more practical resolution hierarchy.  
This approach allowed us to:
- Align field boundaries and historical records across FMISs.
- Perform multi-layer analysis of high-precision datasets such as yield, planting, and scouting data.
- Merge legacy data into a clean, standardised model suitable for analytics and reporting.

This phase created a single source of truth for agronomic and transactional data and laid the groundwork for advanced analytics.

### Phase 2: Unified Analytics and Data Science
Once the FMIS migration was complete, I led the design of a **data mart** that modelled operational data around key business value drivers such as order-to-cash performance, product demand, and inventory efficiency.  
We used **AWS services for ingestion and orchestration**, **HPCC Systems** for large-scale processing, **React** for dashboards, and **SageMaker** for model development and experimentation.

I developed transformations and data quality checks to reconcile the multiple incoming sources, then extended the platform with helper functions for **weather and geospatial enrichment**. The first data science models focused on insights into crop choice and harvest timing.

The result was a **unified analytics layer** that allowed managers to access trustworthy data at the right level of aggregation for their role. Agronomy leaders could monitor team performance, inventory planners could anticipate demand, and analysts could build their own dashboards or APIs for deeper insight.

### Outcomes
- **Reliable decision-making** across eight divisions and three FMIS systems.  
- **First central data team** formed within the client organisation, using this platform as its foundation.  
- **Flexible dashboards and APIs** that became a new internal and external revenue stream.  
- **Improved geospatial accuracy** enabling combined analysis of yield, soil, and planting data at scale.  
- **Cultural shift** from siloed operations to a genuinely data-driven organisation.

### Reflection
This project remains one of the most comprehensive data transformations I’ve led. It required balancing deep technical architecture, hands-on engineering, and organisational change. The geospatial entity resolution work proved pivotal, demonstrating how careful system design can make even highly fragmented agricultural data both interoperable and valuable.

---
