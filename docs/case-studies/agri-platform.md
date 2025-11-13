---
title: "Transforming Analytics in Agriculture"
description: "How I designed and delivered a cloud-based data architecture on AWS to unify ERP data, optimise $10M in rebates, and enable data-driven decision-making for a top-ten US agricultural retailer."
tags: ["Data Architecture", "AWS", "Spark", "Data Engineering", "Agriculture", "Analytics"]
date: 2025-11-11
author: Rob Mansfield
sidebar_position: 3
---

# Transforming Order-to-Cash Analytics for a Leading US Ag Retailer

## TL;DR
A top-ten US agricultural retailer had fragmented ERP data, inconsistent catalogues, and limited analytical capability.  
I led the design and implementation of a new data architecture and analytics platform, migrating from HPCC to AWS-based infrastructure.  
The resulting Order-to-Cash data mart now supports over **400 daily users**, manages **$10M in rebates**, and has transformed how the organisation makes decisions and manages sales performance.

---

## Client Overview
The client is a leading US agricultural retailer, ranked in the CropLife Top 10, operating hundreds of retail locations and multiple ERP instances across the country.  
Thousands of sales representatives used these systems daily, but each operated largely in isolation. The business lacked consistent reporting, unified data structures, and any meaningful data quality oversight.

---

## Challenge
The company’s data environment had evolved organically over many years, resulting in:

- Dozens of ERP implementations with inconsistent schemas  
- Poor catalogue adoption and frequent duplication of entities  
- Minimal data quality assurance and no central governance  
- Fragmented analytical capability reliant on local workarounds and manual reconciliation  

This fragmentation hindered everything from rebate management to sales incentive tracking. Reporting was slow, inconsistent, and often contested, eroding confidence in data-driven decisions.

---

## Approach
I was brought in to design and lead the data architecture and data science function for the initiative.  
My focus was to connect the organisation’s data assets to its core value drivers and deliver a unified analytics environment that could scale.

The first step was to engage stakeholders across sales, finance, and operations to define what “trusted data” meant in their context. From there, I built a comprehensive data model that reflected the organisation’s Order-to-Cash process end-to-end.

Technically, I implemented the data architecture using the following technologies:

- **Spark on EMR** for data processing  
- **AWS Glue** for data integration and orchestration  
- **React** for visualisation and user-facing dashboards  

I designed and implemented the data ingest and transformation pipelines from scratch, embedding business rules, entity resolution, and data quality controls throughout.  
Once stable, the system was handed over to the internal tech team for long-term maintenance.

This required extensive stakeholder management—aligning technical decisions with commercial needs, winning buy-in from teams accustomed to legacy systems, and ensuring the organisation understood both the “how” and the “why” behind the new architecture.

---

## Solution
The result was a modern, cloud-based **Order-to-Cash analytics platform** that unified all sales, rebate, and performance data in one place.

The new data mart provided:

- Consistent, validated data across all business units  
- Dashboards and data extracts tailored for executives, regional managers, and field sales staff  
- Real-time rebate tracking and incentive management, fully automated end-to-end  
- Visibility into data quality issues and ownership across teams  

---

## Results
The impact was immediate and measurable:

- **400+ daily active users** across departments  
- **$10M in rebates** tracked and optimised annually  
- **Rebate reconciliation time** reduced from three months to **three weeks**  
- All **sales incentive programmes** managed directly through the system  
- A new **central data team** established to continue driving data maturity  

Beyond the metrics, the cultural shift was perhaps the most significant outcome.  
Managers at every level could, for the first time, access consistent data and insights aligned to their responsibilities.  
This transparency helped foster trust in the data and laid the foundation for the retailer’s journey toward becoming a genuinely data-driven organisation.

---

## Reflection
This project encapsulated the blend of technical design, delivery discipline, and stakeholder engagement that I value most.  
It required both deep architectural work and a sustained effort to bring people along on the journey.

By focusing on pragmatic design and demonstrating early wins, the project not only modernised the retailer’s technology stack but also reshaped how the organisation thought about and used data.
