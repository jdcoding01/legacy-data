import { Module } from "module";
import path from "path";

const models = require("./models");

const Industries = models.os_industries;
const Categories = models.os_categories;
const Skills = models.os_skills;
const Modules = models.os_modules;
const Features = models.os_features;

const SkillCategory = models.os_category_skill;
const ModuleCategory = models.os_category_module;
const ModuleSkill = models.os_module_skill;
const ModuleFeatures = models.os_mdl_features;

const fs = require("fs");

abstract class DataParser {
    private static readonly path: string = "./results/data.txt";
    private static readonly errPath: string = "./results/error.txt";



    public static async createData(): Promise<void> {
        const industries = await Industries.findAll({});
        for (let i = 0; i < industries.length; i++) {
            const categories = await Categories.findAll({ where: { industry_id: industries[i].id } })
            const categoriesList: Array<any> = [];


            if (categories[i] === undefined) {
                fs.appendFileSync(this.errPath, `Failed to find category for industry: ${industries[i].id} - ${industries[i].name} \n`, (err: any) => { });
            }
            else {
                for (var e = 0; e < categories.length; e++) {
                    const skillsList: Array<any> = [];
                    const moduleList: Array<any> = [];
                    const skillModuleList: Array<any> = [];

                    const skillId = await SkillCategory.findAll({ where: { category_id: categories[e].id } });
                    const moduleId = await ModuleCategory.findAll({ where: { category_id: categories[e].id } });


                    for (let index = 0; index < skillId.length; index++) {
                        const element = skillId[index];
                        const moduleFeatureList: Array<any> = [];

                        const skill = await Skills.findAll({ where: { id: element.skill_id } });
                        const skillModuleId = await ModuleSkill.findAll({ where: { skill_id: element.skill_id } });
                        for (let k = 0; k < skillModuleId.length; k++) {
                            const element = skillModuleId[k];
                            const skillModule = await Modules.findAll({ where: { id: element.module_id } });

                            const featureId = await ModuleFeatures.findAll({ where: { module_id: element.module_id } });
                            for (let c = 0; c < featureId.length; c++) {
                                const element = featureId[c];
                                const moduleFeature = await Features.findAll({ where: { id: element.feature_id } });
                                if (moduleFeature[0] != undefined) {
                                    moduleFeatureList.push({
                                        "feature": moduleFeature[0].label,
                                        "value": ""
                                    })
                                }

                            }
                            skillModuleList.push({
                                "name": skillModule[0].title,
                                "features": moduleFeatureList
                            })

                        }
                        for (var f = 0; f < skill.length; f++) {
                            skillsList.push({
                                "skillName": skill[f].name,
                                "modules": skillModuleList
                            })
                        }
                    }

                    for (let index = 0; index < moduleId.length; index++) {
                        const element = moduleId[index];

                        const module = await Modules.findAll({ where: { id: element.module_id } });

                        moduleList.push({
                            "name": module[0].title,
                            "features": []
                        })
                    }
                    categoriesList.push(JSON.stringify({ "categoryName": categories[e].name, "skills": skillsList, "categoryModules": moduleList }));
                }
                fs.appendFileSync(`./results/${industries[i].name}.json`, `{ "industry": "${industries[i].name}", "data": [${categoriesList}] },`)
            }

            console.log(`Wrote ${i + 1}/${industries.length} entries.`);
        }
    }
}

DataParser.createData()